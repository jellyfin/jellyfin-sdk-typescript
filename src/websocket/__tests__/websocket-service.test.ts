/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { afterEach, beforeEach, describe, it, vi } from 'vitest';
import { expect } from 'vitest';

import { AUTHORIZATION_HEADER } from '../../constants';
import type { ForceKeepAliveMessage, SessionsStartMessage } from '../../generated-client';
import { RECONNECT_INITIAL_DELAY, RECONNECT_MAX_ATTEMPTS, RECONNECT_MAX_DELAY, WEBSOCKET_URL_PATH } from '../constants';
import { PeriodicListenerInterval } from '../models';
import { WebSocketService } from '../websocket-service';

vi.mock('../../api');

function createMockWebSocket() {
	const eventListeners: Record<string, ((event: Event) => void)[]> = {
		open: [],
		message: [],
		close: []
	};

	return {
		readyState: WebSocket.CONNECTING as number,
		send: vi.fn(),
		close: vi.fn(),
		addEventListener: vi.fn((event: string, handler: (event: Event) => void) => {
			eventListeners[event]?.push(handler);
		}),
		removeEventListener: vi.fn(),
		dispatchEvent: vi.fn(),
		// Helpers to trigger events
		__triggerOpen: () => {
			eventListeners.open.forEach(handler => handler(new Event('open')));
		},
		__triggerMessage: (data: string) => {
			eventListeners.message.forEach(handler => handler(new MessageEvent('message', { data })));
		},
		__triggerClose: (code = 1006, reason = '') => {
			eventListeners.close.forEach(handler => handler(Object.assign(new Event('close'), { code, reason })));
		}
	};
}

type MockWebSocket = ReturnType<typeof createMockWebSocket>;

/**
 * The most recently created socket.
 *
 * The first socket is created up front so tests can configure it before the service connects.
 * Each later connection gets a fresh socket, which then becomes the `mockWebSocket`.
 */
let mockWebSocket: MockWebSocket;

/**
 * Every socket created by the service, in order
 */
let sockets: MockWebSocket[];

globalThis.WebSocket = vi.fn(function() {
	if (sockets.length > 0) mockWebSocket = createMockWebSocket();
	sockets.push(mockWebSocket);
	return mockWebSocket;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any;

// Assign standard WebSocket static constants to the mock so comparisons like
// `socket.readyState === WebSocket.OPEN` work correctly in tests.
(globalThis.WebSocket as unknown as Record<string, number>).CONNECTING = 0;
(globalThis.WebSocket as unknown as Record<string, number>).OPEN = 1;
(globalThis.WebSocket as unknown as Record<string, number>).CLOSING = 2;
(globalThis.WebSocket as unknown as Record<string, number>).CLOSED = 3;

describe('WebSocketService', () => {
	let service: WebSocketService;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let mockApi: any;

	beforeEach(() => {
		vi.clearAllMocks();

		// Setup mock Api
		mockApi = {
			getUri: vi.fn((endpoint: string, params: object) => {
				return `http://example.com/api/${endpoint}?token=${params.toString()}`;
			}),
			accessToken: 'test-token-123',
			axiosInstance: {}
		};

		mockWebSocket = createMockWebSocket();
		sockets = [];

		service = new WebSocketService(
			mockApi.getUri(WEBSOCKET_URL_PATH, {
				[AUTHORIZATION_HEADER]: mockApi.accessToken }
			)
		);
	});

	afterEach(() => {
		vi.clearAllMocks();
		vi.useRealTimers();
	});

	describe('constructor', () => {
		it('should initialize with an Api instance', () => {
			expect(service).toBeDefined();
		});

		it('should start in disconnected status', () => {
			expect(service.socketStatus).toBe('disconnected');
		});
	});

	describe('getSocketStatus()', () => {
		it('should return disconnected when no socket exists', () => {
			expect(service.socketStatus).toBe('disconnected');
		});

		it('should return connecting while the socket is opening', () => {
			service.subscribe(['Sessions'], () => {});
			expect(service.socketStatus).toBe('connecting');
		});

		it('should return open once the socket opens', () => {
			mockWebSocket.readyState = WebSocket.OPEN;
			service.subscribe(['Sessions'], () => {});
			mockWebSocket.__triggerOpen();
			expect(service.socketStatus).toBe('open');
		});
	});

	describe('subscribe()', () => {
		it('should create a websocket connection if one does not exist', () => {
			mockWebSocket.readyState = WebSocket.CONNECTING;
			service.subscribe(['Sessions'], () => {});
			expect(globalThis.WebSocket).toHaveBeenCalled();
		});

		it('should register a handler for a message type', () => {
			const handler = vi.fn();
			mockWebSocket.readyState = WebSocket.OPEN;
			service.subscribe(['Sessions'], handler);

			// Simulate receiving a message
			const message = { MessageType: 'Sessions', Data: '0,1500' } as SessionsStartMessage;
			mockWebSocket.__triggerMessage(JSON.stringify(message));

			expect(handler).toHaveBeenCalledWith(message);
		});

		it('should send a start message when subscribing to a registered type', () => {
			mockWebSocket.readyState = WebSocket.OPEN;
			service.subscribe(['Sessions'], () => {});

			expect(mockWebSocket.send).toHaveBeenCalledWith(
				JSON.stringify({ MessageType: 'SessionsStart', Data: '0,1000' })
			);
		});

		it('should support multiple message types in one subscription', () => {
			const handler = vi.fn();
			mockWebSocket.readyState = WebSocket.OPEN;

			service.subscribe(['Sessions', 'ActivityLogEntry'], handler);

			// Verify both start messages sent
			const calls = mockWebSocket.send.mock.calls;
			expect(calls.length).toBeGreaterThanOrEqual(2);
		});

		it('should support multiple handlers for the same message type', () => {
			const handler1 = vi.fn();
			const handler2 = vi.fn();
			mockWebSocket.readyState = WebSocket.OPEN;

			service.subscribe(['Sessions'], handler1);
			service.subscribe(['Sessions'], handler2);

			mockWebSocket.readyState = WebSocket.OPEN;
			const message = { MessageType: 'Sessions', Data: '0,800' } as SessionsStartMessage;
			mockWebSocket.__triggerMessage(JSON.stringify(message));

			expect(handler1).toHaveBeenCalledWith(message);
			expect(handler2).toHaveBeenCalledWith(message);
		});

		it('should return an unsubscribe function', () => {
			mockWebSocket.readyState = WebSocket.OPEN;
			const unsubscribe = service.subscribe(['Sessions'], () => {});
			expect(typeof unsubscribe).toBe('function');
		});
	});

	describe('unsubscribe()', () => {
		it('should remove a handler when invoked', () => {
			const handler = vi.fn();
			mockWebSocket.readyState = WebSocket.OPEN;
			const unsubscribe = service.subscribe(['Sessions'], handler);

			unsubscribe();

			const message = { MessageType: 'Sessions', Data: '0,5000' } as SessionsStartMessage;
			mockWebSocket.__triggerMessage(JSON.stringify(message));

			expect(handler).not.toHaveBeenCalled();
		});

		it('should send a stop message when last handler is removed', () => {
			mockWebSocket.readyState = WebSocket.OPEN;
			const unsubscribe = service.subscribe(['Sessions'], () => {});

			mockWebSocket.send.mockClear();
			unsubscribe();

			expect(mockWebSocket.send).toHaveBeenCalledWith(
				JSON.stringify({ MessageType: 'SessionsStop' })
			);
		});

		it('should close socket when all subscriptions are removed', () => {
			mockWebSocket.readyState = WebSocket.OPEN;
			const unsubscribe = service.subscribe(['Sessions'], () => {});

			unsubscribe();

			expect(mockWebSocket.close).toHaveBeenCalled();
		});

		it('should not close socket if other subscriptions remain', () => {
			mockWebSocket.readyState = WebSocket.OPEN;
			const unsubscribe1 = service.subscribe(['Sessions'], () => {});
			service.subscribe(['ActivityLogEntry'], () => {});

			mockWebSocket.close.mockClear();

			unsubscribe1();

			expect(mockWebSocket.close).not.toHaveBeenCalled();
		});
	});

	describe('websocket lifecycle', () => {
		it('should send queued start messages when socket opens', () => {
			mockWebSocket.readyState = WebSocket.CONNECTING;
			service.subscribe(['Sessions'], () => {});

			// Simulate socket opening
			mockWebSocket.readyState = WebSocket.OPEN;
			mockWebSocket.__triggerOpen();

			expect(mockWebSocket.send).toHaveBeenCalledWith(
				JSON.stringify({ MessageType: 'SessionsStart', Data: '0,1000' })
			);
		});

		it('should reconnect after the backoff delay on close', async () => {
			vi.useFakeTimers();
			mockWebSocket.readyState = WebSocket.OPEN;
			service.subscribe(['Sessions'], () => {});

			mockWebSocket.readyState = WebSocket.CLOSED;
			mockWebSocket.__triggerClose();

			vi.advanceTimersByTime(RECONNECT_INITIAL_DELAY - 1);
			expect(globalThis.WebSocket).toHaveBeenCalledTimes(1);

			vi.advanceTimersByTime(1);
			expect(globalThis.WebSocket).toHaveBeenCalledTimes(2); // Once for initial, once for reconnect

			vi.useRealTimers();
		});

		it('should not reconnect if no subscriptions exist', async () => {
			vi.useFakeTimers();
			mockWebSocket.readyState = WebSocket.OPEN;
			const unsubscribe = service.subscribe(['Sessions'], () => {});

			unsubscribe();
			mockWebSocket.readyState = WebSocket.CLOSED;

			mockWebSocket.__triggerClose();
			vi.advanceTimersByTime(5000);

			expect(globalThis.WebSocket).toHaveBeenCalledTimes(1);

			vi.useRealTimers();
		});
	});

	describe('message parsing', () => {
		it('should parse JSON messages correctly', () => {
			const handler = vi.fn();
			mockWebSocket.readyState = WebSocket.OPEN;
			service.subscribe(['Sessions'], handler);

			const message = {
				MessageType: 'Sessions',
				data: { userId: '123' }
			} as SessionsStartMessage;

			mockWebSocket.__triggerMessage(JSON.stringify(message));

			expect(handler).toHaveBeenCalledWith(message);
		});

		it('should call multiple handlers for the same message', () => {
			const handler1 = vi.fn();
			const handler2 = vi.fn();
			mockWebSocket.readyState = WebSocket.OPEN;

			service.subscribe(['Sessions'], handler1);
			service.subscribe(['Sessions'], handler2);

			const message = { MessageType: 'Sessions' } as SessionsStartMessage;
			mockWebSocket.__triggerMessage(JSON.stringify(message));

			expect(handler1).toHaveBeenCalledWith(message);
			expect(handler2).toHaveBeenCalledWith(message);
		});
	});

	describe('onStatusChange()', () => {
		it('should notify listener when connecting and when the socket opens', () => {
			const statusListener = vi.fn();
			mockWebSocket.readyState = WebSocket.OPEN;

			service.onStatusChange(statusListener);
			service.subscribe(['Sessions'], () => {});
			mockWebSocket.__triggerOpen();

			expect(statusListener).toHaveBeenNthCalledWith(1, { status: 'connecting' });
			expect(statusListener).toHaveBeenNthCalledWith(2, { status: 'open' });
		});

		it('should notify listener with reconnection details when the connection is lost', () => {
			vi.useFakeTimers();
			const statusListener = vi.fn();
			mockWebSocket.readyState = WebSocket.OPEN;

			service.onStatusChange(statusListener);
			service.subscribe(['Sessions'], () => {});
			mockWebSocket.__triggerOpen();
			statusListener.mockClear();

			mockWebSocket.__triggerClose(1006, 'Abnormal closure');

			expect(statusListener).toHaveBeenCalledWith({
				status: 'reconnecting',
				attempt: 1,
				delay: 1000,
				code: 1006,
				reason: 'Abnormal closure'
			});
			expect(service.socketStatus).toBe('reconnecting');

			vi.advanceTimersByTime(1000);
			expect(statusListener).toHaveBeenLastCalledWith({ status: 'connecting' });

			vi.useRealTimers();
		});

		it('should notify listener of an intentional disconnect when all subscriptions are removed', () => {
			const statusListener = vi.fn();
			mockWebSocket.readyState = WebSocket.OPEN;

			service.onStatusChange(statusListener);
			const unsubscribe = service.subscribe(['Sessions'], () => {});
			mockWebSocket.__triggerOpen();
			statusListener.mockClear();

			unsubscribe();
			// The browser fires close after the socket was closed by us
			mockWebSocket.__triggerClose(1000);

			expect(statusListener).toHaveBeenCalledTimes(1);
			expect(statusListener).toHaveBeenCalledWith({ status: 'disconnected', intentional: true });
		});

		it('should notify listener of an intentional disconnect on disconnect()', () => {
			const statusListener = vi.fn();
			mockWebSocket.readyState = WebSocket.OPEN;

			service.onStatusChange(statusListener);
			service.subscribe(['Sessions'], () => {});
			mockWebSocket.__triggerOpen();
			statusListener.mockClear();

			service.disconnect();
			mockWebSocket.__triggerClose(1000);

			expect(statusListener).toHaveBeenCalledTimes(1);
			expect(statusListener).toHaveBeenCalledWith({ status: 'disconnected', intentional: true });
		});

		it('should return unsubscribe function', () => {
			const statusListener = vi.fn();
			const unsubscribe = service.onStatusChange(statusListener);

			expect(typeof unsubscribe).toBe('function');

			mockWebSocket.readyState = WebSocket.OPEN;
			service.subscribe(['Sessions'], () => {});
			mockWebSocket.__triggerOpen();

			expect(statusListener).toHaveBeenCalled();

			statusListener.mockClear();
			unsubscribe();

			mockWebSocket.__triggerClose();
			mockWebSocket.__triggerOpen();

			expect(statusListener).not.toHaveBeenCalled();
		});

		it('should support multiple status listeners', () => {
			const listener1 = vi.fn();
			const listener2 = vi.fn();

			service.onStatusChange(listener1);
			service.onStatusChange(listener2);

			mockWebSocket.readyState = WebSocket.OPEN;
			service.subscribe(['Sessions'], () => {});
			mockWebSocket.__triggerOpen();

			expect(listener1).toHaveBeenCalledWith({ status: 'open' });
			expect(listener2).toHaveBeenCalledWith({ status: 'open' });
		});

		it("should not notify listener if status doesn't change", () => {
			const statusListener = vi.fn();
			service.onStatusChange(statusListener);

			// Trigger duplicate status changes
			mockWebSocket.readyState = WebSocket.OPEN;
			service.subscribe(['Sessions'], () => {});
			mockWebSocket.__triggerOpen();
			mockWebSocket.__triggerOpen();

			// Once for connecting, once for open
			expect(statusListener).toHaveBeenCalledTimes(2);
		});
	});

	describe('replaced sockets', () => {
		it('should ignore close events from a socket replaced by updateUrl', () => {
			vi.useFakeTimers();

			const statusListener = vi.fn();
			service.onStatusChange(statusListener);
			service.subscribe(['Sessions'], () => {});
			sockets[0].__triggerOpen();

			service.updateUrl('http://example.com/new-url');
			sockets[1].readyState = WebSocket.OPEN;
			sockets[1].__triggerOpen();
			statusListener.mockClear();

			// The old socket finishes closing after the new one is open
			sockets[0].__triggerClose(1000);
			vi.advanceTimersByTime(RECONNECT_MAX_DELAY);

			expect(statusListener).not.toHaveBeenCalled();
			expect(service.socketStatus).toBe('open');
			expect(globalThis.WebSocket).toHaveBeenCalledTimes(2);
		});

		it('should ignore open events from a socket replaced by updateUrl', () => {
			const statusListener = vi.fn();
			service.subscribe(['Sessions'], () => {});

			service.updateUrl('http://example.com/new-url');
			service.onStatusChange(statusListener);

			// The old socket opens late, while the new one is still connecting
			sockets[0].__triggerOpen();

			expect(statusListener).not.toHaveBeenCalled();
			expect(service.socketStatus).toBe('connecting');
		});

		it('should ignore messages from a socket replaced by updateUrl', () => {
			const handler = vi.fn();
			service.subscribe(['Sessions'], handler);
			sockets[0].__triggerOpen();

			service.updateUrl('http://example.com/new-url');

			sockets[0].__triggerMessage(JSON.stringify({ MessageType: 'Sessions', Data: [] }));
			expect(handler).not.toHaveBeenCalled();

			sockets[1].__triggerMessage(JSON.stringify({ MessageType: 'Sessions', Data: [] }));
			expect(handler).toHaveBeenCalledOnce();
		});

		it('should not open a second socket when subscribing while a reconnection is pending', () => {
			vi.useFakeTimers();

			service.subscribe(['Sessions'], () => {});
			sockets[0].readyState = WebSocket.OPEN;
			sockets[0].__triggerOpen();

			sockets[0].readyState = WebSocket.CLOSED;
			sockets[0].__triggerClose();
			expect(service.socketStatus).toBe('reconnecting');

			// Subscribing reconnects immediately rather than waiting for the backoff
			service.subscribe(['ActivityLogEntry'], () => {});
			expect(globalThis.WebSocket).toHaveBeenCalledTimes(2);

			// And the pending reconnection is cancelled
			vi.advanceTimersByTime(RECONNECT_MAX_DELAY);
			expect(globalThis.WebSocket).toHaveBeenCalledTimes(2);
		});

		it('should restart the backoff after the socket is torn down', () => {
			vi.useFakeTimers();
			const statusListener = vi.fn();
			service.onStatusChange(statusListener);

			service.subscribe(['Sessions'], () => {});
			sockets[0].__triggerOpen();

			// Two consecutive failures
			sockets[0].__triggerClose();
			vi.advanceTimersByTime(RECONNECT_MAX_DELAY);
			sockets[1].__triggerClose();
			expect(statusListener).toHaveBeenLastCalledWith(expect.objectContaining({ status: 'reconnecting', attempt: 2 }));

			// New credentials, then the new socket fails before ever opening
			service.updateUrl('http://example.com/new-url');
			sockets[2].__triggerClose();

			expect(statusListener).toHaveBeenLastCalledWith(
				expect.objectContaining({ status: 'reconnecting', attempt: 1, delay: RECONNECT_INITIAL_DELAY })
			);
		});
	});

	describe('reconnection limit', () => {
		/**
		 * Fails every reconnection attempt until the service gives up
		 */
		function exhaustReconnectionAttempts() {
			for (let attempt = 1; attempt <= RECONNECT_MAX_ATTEMPTS; attempt++) {
				mockWebSocket.__triggerClose();
				vi.advanceTimersByTime(RECONNECT_MAX_DELAY);
			}
			mockWebSocket.__triggerClose(1006, 'Server unreachable');
		}

		it('should retry up to the maximum number of attempts', () => {
			vi.useFakeTimers();
			const statusListener = vi.fn();
			service.onStatusChange(statusListener);
			service.subscribe(['Sessions'], () => {});
			mockWebSocket.__triggerOpen();

			for (let attempt = 1; attempt <= RECONNECT_MAX_ATTEMPTS; attempt++) {
				mockWebSocket.__triggerClose();
				expect(statusListener).toHaveBeenLastCalledWith(expect.objectContaining({ status: 'reconnecting', attempt }));
				vi.advanceTimersByTime(RECONNECT_MAX_DELAY);
			}

			// One initial connection plus every reconnection attempt
			expect(globalThis.WebSocket).toHaveBeenCalledTimes(RECONNECT_MAX_ATTEMPTS + 1);
		});

		it('should give up and report an unintentional disconnect after the maximum number of attempts', () => {
			vi.useFakeTimers();
			const statusListener = vi.fn();
			service.onStatusChange(statusListener);
			service.subscribe(['Sessions'], () => {});
			mockWebSocket.__triggerOpen();

			exhaustReconnectionAttempts();

			expect(statusListener).toHaveBeenLastCalledWith({
				status: 'disconnected',
				intentional: false,
				code: 1006,
				reason: 'Server unreachable'
			});
			expect(service.socketStatus).toBe('disconnected');

			vi.advanceTimersByTime(RECONNECT_MAX_DELAY);
			expect(globalThis.WebSocket).toHaveBeenCalledTimes(RECONNECT_MAX_ATTEMPTS + 1);
			expect(vi.getTimerCount()).toBe(0);
		});

		it('should reset the attempt count after a successful reconnection', () => {
			vi.useFakeTimers();
			const statusListener = vi.fn();
			service.onStatusChange(statusListener);
			service.subscribe(['Sessions'], () => {});
			mockWebSocket.__triggerOpen();

			mockWebSocket.__triggerClose();
			vi.advanceTimersByTime(RECONNECT_MAX_DELAY);

			// A successful reconnection resets the count
			mockWebSocket.__triggerOpen();
			mockWebSocket.__triggerClose();

			expect(statusListener).toHaveBeenLastCalledWith(expect.objectContaining({ status: 'reconnecting', attempt: 1 }));
		});

		it('should reconnect with a fresh backoff when reconnect() is called after giving up', () => {
			vi.useFakeTimers();
			const handler = vi.fn();
			const statusListener = vi.fn();
			service.onStatusChange(statusListener);
			service.subscribe(['Sessions'], handler);
			mockWebSocket.__triggerOpen();
			exhaustReconnectionAttempts();

			service.reconnect();

			expect(globalThis.WebSocket).toHaveBeenCalledTimes(RECONNECT_MAX_ATTEMPTS + 2);
			expect(service.socketStatus).toBe('connecting');

			// Subscriptions survived giving up
			mockWebSocket.readyState = WebSocket.OPEN;
			mockWebSocket.__triggerOpen();
			expect(mockWebSocket.send).toHaveBeenCalledWith(
				JSON.stringify({ MessageType: 'SessionsStart', Data: '0,1000' })
			);
			mockWebSocket.__triggerMessage(JSON.stringify({ MessageType: 'Sessions', Data: [] }));
			expect(handler).toHaveBeenCalledOnce();

			mockWebSocket.__triggerClose();
			expect(statusListener).toHaveBeenLastCalledWith(
				expect.objectContaining({ status: 'reconnecting', attempt: 1, delay: RECONNECT_INITIAL_DELAY })
			);
		});

		it('should reconnect when subscribing after giving up', () => {
			vi.useFakeTimers();
			service.subscribe(['Sessions'], () => {});
			mockWebSocket.__triggerOpen();
			exhaustReconnectionAttempts();

			const statusListener = vi.fn();
			service.onStatusChange(statusListener);
			service.subscribe(['Sessions'], () => {});

			expect(globalThis.WebSocket).toHaveBeenCalledTimes(RECONNECT_MAX_ATTEMPTS + 2);

			// The backoff starts over rather than giving up again straight away
			mockWebSocket.__triggerClose();
			expect(statusListener).toHaveBeenLastCalledWith(expect.objectContaining({ status: 'reconnecting', attempt: 1 }));
		});
	});

	describe('reconnect()', () => {
		it('should replace the active socket immediately', () => {
			vi.useFakeTimers();
			service.subscribe(['Sessions'], () => {});
			sockets[0].__triggerOpen();
			sockets[0].__triggerClose();
			expect(service.socketStatus).toBe('reconnecting');

			service.reconnect();

			expect(globalThis.WebSocket).toHaveBeenCalledTimes(2);
			expect(service.socketStatus).toBe('connecting');

			// The pending backoff reconnection was cancelled
			vi.advanceTimersByTime(RECONNECT_MAX_DELAY);
			expect(globalThis.WebSocket).toHaveBeenCalledTimes(2);
		});

		it('should close the previous socket', () => {
			service.subscribe(['Sessions'], () => {});
			sockets[0].readyState = WebSocket.OPEN;
			sockets[0].__triggerOpen();

			service.reconnect();

			expect(sockets[0].close).toHaveBeenCalled();
		});

		it('should do nothing without subscriptions', () => {
			service.reconnect();
			expect(globalThis.WebSocket).not.toHaveBeenCalled();
		});

		it('should do nothing without a URL', () => {
			const deferredService = new WebSocketService();
			deferredService.subscribe(['Sessions'], () => {});

			deferredService.reconnect();

			expect(globalThis.WebSocket).not.toHaveBeenCalled();
		});
	});

	describe('forceKeepAlive message handling', () => {
		const KEEP_ALIVE_MESSAGE = JSON.stringify({ MessageType: 'KeepAlive' });

		it('should answer a ForceKeepAlive immediately and keep answering every half timeout', () => {
			vi.useFakeTimers();
			mockWebSocket.readyState = WebSocket.OPEN;
			service.subscribe(['Sessions'], () => {});

			mockWebSocket.send.mockClear();

			// The server reports its timeout in seconds
			const forceKeepAliveMessage = {
				MessageType: 'ForceKeepAlive',
				Data: 60
			} as ForceKeepAliveMessage;

			mockWebSocket.__triggerMessage(JSON.stringify(forceKeepAliveMessage));

			// The server only asks for this when it has not heard from us, so answer at once
			expect(mockWebSocket.send).toHaveBeenCalledTimes(1);
			expect(mockWebSocket.send).toHaveBeenCalledWith(KEEP_ALIVE_MESSAGE);

			// And then every 30 seconds, well inside the 60 second timeout
			vi.advanceTimersByTime(29_000);
			expect(mockWebSocket.send).toHaveBeenCalledTimes(1);

			vi.advanceTimersByTime(1_000);
			expect(mockWebSocket.send).toHaveBeenCalledTimes(2);

			vi.advanceTimersByTime(30_000);
			expect(mockWebSocket.send).toHaveBeenCalledTimes(3);

			vi.useRealTimers();
		});

		it('should not call subscription handlers for ForceKeepAlive message', () => {
			vi.useFakeTimers();
			const handler = vi.fn();
			mockWebSocket.readyState = WebSocket.OPEN;
			service.subscribe(['Sessions'], handler);

			mockWebSocket.send.mockClear();

			// Simulate receiving ForceKeepAlive message
			const forceKeepAliveMessage = {
				MessageType: 'ForceKeepAlive',
				Data: 60
			} as ForceKeepAliveMessage;

			mockWebSocket.__triggerMessage(JSON.stringify(forceKeepAliveMessage));

			// Handler should not be called for ForceKeepAlive
			expect(handler).not.toHaveBeenCalled();

			vi.advanceTimersByTime(30_000);

			// Handler still should not be called after KeepAlive is sent
			expect(handler).not.toHaveBeenCalled();

			vi.useRealTimers();
		});

		it('should replace the previous keep-alive interval when a new ForceKeepAlive arrives', () => {
			vi.useFakeTimers();
			mockWebSocket.readyState = WebSocket.OPEN;
			service.subscribe(['Sessions'], () => {});

			mockWebSocket.send.mockClear();

			// A 60 second timeout, so a keep-alive every 30 seconds
			mockWebSocket.__triggerMessage(
				JSON.stringify({
					MessageType: 'ForceKeepAlive',
					Data: 60
				} as ForceKeepAliveMessage)
			);
			expect(mockWebSocket.send).toHaveBeenCalledTimes(1);

			vi.advanceTimersByTime(10_000);

			// A 20 second timeout, so a keep-alive every 10 seconds from here on
			mockWebSocket.__triggerMessage(
				JSON.stringify({
					MessageType: 'ForceKeepAlive',
					Data: 20
				} as ForceKeepAliveMessage)
			);
			expect(mockWebSocket.send).toHaveBeenCalledTimes(2);

			// Only the new interval is running, the 30 second one would have fired as well
			vi.advanceTimersByTime(10_000);
			expect(mockWebSocket.send).toHaveBeenCalledTimes(3);

			vi.advanceTimersByTime(10_000);
			expect(mockWebSocket.send).toHaveBeenCalledTimes(4);

			vi.advanceTimersByTime(10_000);
			expect(mockWebSocket.send).toHaveBeenCalledTimes(5);

			vi.useRealTimers();
		});

		it('should stop sending keep-alives once the socket closes', () => {
			vi.useFakeTimers();
			mockWebSocket.readyState = WebSocket.OPEN;
			service.subscribe(['Sessions'], () => {});

			mockWebSocket.send.mockClear();

			mockWebSocket.__triggerMessage(
				JSON.stringify({
					MessageType: 'ForceKeepAlive',
					Data: 60
				} as ForceKeepAliveMessage)
			);
			expect(mockWebSocket.send).toHaveBeenCalledTimes(1);

			mockWebSocket.readyState = WebSocket.CLOSED;
			mockWebSocket.__triggerClose();
			mockWebSocket.send.mockClear();

			vi.advanceTimersByTime(120_000);
			expect(mockWebSocket.send).not.toHaveBeenCalled();

			vi.useRealTimers();
		});
	});

	describe('config parameter', () => {
		it('should use custom interval from config for a specific message type', () => {
			const customConfig = {
				Sessions: new PeriodicListenerInterval(100, 2000)
			};

			const configuredService = new WebSocketService(
				mockApi.getUri(WEBSOCKET_URL_PATH, {
					[AUTHORIZATION_HEADER]: mockApi.accessToken
				})
			);

			mockWebSocket.readyState = WebSocket.OPEN;
			configuredService.subscribe(['Sessions'], () => {}, customConfig);

			expect(mockWebSocket.send).toHaveBeenCalledWith(
				JSON.stringify({ MessageType: 'SessionsStart', Data: '100,2000' })
			);
		});

		it('should use default interval when config is not provided', () => {
			const defaultService = new WebSocketService(
				mockApi.getUri(WEBSOCKET_URL_PATH, {
					[AUTHORIZATION_HEADER]: mockApi.accessToken
				})
			);

			mockWebSocket.readyState = WebSocket.OPEN;
			defaultService.subscribe(['Sessions'], () => {});

			expect(mockWebSocket.send).toHaveBeenCalledWith(
				JSON.stringify({ MessageType: 'SessionsStart', Data: '0,1000' })
			);
		});

		it('should use default interval for message types not in config', () => {
			const partialConfig = {
				Sessions: new PeriodicListenerInterval(50, 3000)
			};

			const configuredService = new WebSocketService(
				mockApi.getUri(WEBSOCKET_URL_PATH, {
					[AUTHORIZATION_HEADER]: mockApi.accessToken
				})
			);

			mockWebSocket.readyState = WebSocket.OPEN;
			configuredService.subscribe(['ActivityLogEntry'], () => {}, partialConfig);

			expect(mockWebSocket.send).toHaveBeenCalledWith(
				JSON.stringify({ MessageType: 'ActivityLogEntryStart', Data: '0,1000' })
			);
		});

		it('should use different intervals for different message types', () => {
			const customConfig = {
				Sessions: new PeriodicListenerInterval(0, 1500),
				ActivityLogEntry: new PeriodicListenerInterval(100, 5000)
			};

			const configuredService = new WebSocketService(
				mockApi.getUri(WEBSOCKET_URL_PATH, {
					[AUTHORIZATION_HEADER]: mockApi.accessToken
				})
			);

			mockWebSocket.readyState = WebSocket.OPEN;
			configuredService.subscribe(['Sessions', 'ActivityLogEntry'], () => {}, customConfig);

			expect(mockWebSocket.send).toHaveBeenCalledWith(
				JSON.stringify({ MessageType: 'SessionsStart', Data: '0,1500' })
			);
			expect(mockWebSocket.send).toHaveBeenCalledWith(
				JSON.stringify({ MessageType: 'ActivityLogEntryStart', Data: '100,5000' })
			);
		});

		it('should apply config intervals when socket reconnects', () => {
			vi.useFakeTimers();

			const customConfig = {
				Sessions: new PeriodicListenerInterval(200, 4000)
			};

			const configuredService = new WebSocketService(
				mockApi.getUri(WEBSOCKET_URL_PATH, {
					[AUTHORIZATION_HEADER]: mockApi.accessToken
				})
			);

			mockWebSocket.readyState = WebSocket.OPEN;
			configuredService.subscribe(['Sessions'], () => {}, customConfig);
			// Clear previous send calls
			mockWebSocket.send.mockClear();

			// Simulate socket close
			mockWebSocket.readyState = WebSocket.CLOSED;
			mockWebSocket.__triggerClose();

			// Advance time to trigger reconnect
			vi.advanceTimersByTime(5000);

			// Simulate new socket opening
			mockWebSocket.readyState = WebSocket.OPEN;
			mockWebSocket.__triggerOpen();

			// Should use the same config interval after reconnect
			expect(mockWebSocket.send).toHaveBeenCalledWith(
				JSON.stringify({ MessageType: 'SessionsStart', Data: '200,4000' })
			);

			vi.useRealTimers();
		});
	});

	describe('disconnect()', () => {
		it('should stop all timers', () => {
			vi.useFakeTimers();

			mockWebSocket.readyState = WebSocket.OPEN;
			service.subscribe(['Sessions'], () => {});
			mockWebSocket.__triggerMessage(JSON.stringify({ MessageType: 'ForceKeepAlive', Data: 60 }));
			expect(vi.getTimerCount()).toBe(1);

			service.disconnect();

			expect(vi.getTimerCount()).toBe(0);
		});

		it('should disconnect but preserve subscriptions', () => {
			vi.useFakeTimers();

			mockWebSocket.readyState = WebSocket.OPEN;
			const handler = vi.fn();
			service.subscribe(['Sessions'], handler);

			// Disconnect (simulating token cleared)
			service.disconnect();

			expect(mockWebSocket.close).toHaveBeenCalled();

			// Advance time - should NOT attempt to reconnect
			vi.advanceTimersByTime(10000);

			// Should only have been called once for initial connection
			expect(globalThis.WebSocket).toHaveBeenCalledTimes(1);

			vi.useRealTimers();
		});

		it('should reconnect with subscriptions when updateUrl is called after disconnect', () => {
			vi.useFakeTimers();

			mockWebSocket.readyState = WebSocket.OPEN;
			const handler = vi.fn();
			service.subscribe(['Sessions'], handler);

			// Disconnect (simulating token cleared)
			service.disconnect();

			// Update URL (simulating new token provided)
			service.updateUrl('http://example.com/new-url');

			// Should have created a new WebSocket connection
			expect(globalThis.WebSocket).toHaveBeenCalledTimes(2);

			// Simulate new socket opening
			mockWebSocket.readyState = WebSocket.OPEN;
			mockWebSocket.__triggerOpen();

			// Should send start message for existing subscription
			expect(mockWebSocket.send).toHaveBeenCalledWith(
				JSON.stringify({ MessageType: 'SessionsStart', Data: '0,1000' })
			);

			vi.useRealTimers();
		});

		it('should re-enable auto-reconnect after updateUrl', () => {
			vi.useFakeTimers();

			mockWebSocket.readyState = WebSocket.OPEN;
			service.subscribe(['Sessions'], () => {});

			// Disconnect (simulating token cleared)
			service.disconnect();

			vi.mocked(globalThis.WebSocket).mockClear();

			// Update URL (simulating new token provided)
			service.updateUrl('http://example.com/new-url');

			// Should have created a new socket
			expect(globalThis.WebSocket).toHaveBeenCalledTimes(1);

			// Simulate connection closing unexpectedly
			mockWebSocket.readyState = WebSocket.CLOSED;
			mockWebSocket.__triggerClose();

			// Advance time to trigger reconnect
			vi.advanceTimersByTime(5000);

			// Should have attempted to reconnect (auto-reconnect re-enabled)
			expect(globalThis.WebSocket).toHaveBeenCalledTimes(2);

			vi.useRealTimers();
		});
	});

	describe('deferred connection (no access token)', () => {
		it('should not connect when constructed without a URL', () => {
			const deferredService = new WebSocketService();

			deferredService.subscribe(['Sessions'], vi.fn());

			expect(globalThis.WebSocket).not.toHaveBeenCalled();
		});

		it('should keep subscriptions intact when constructed without a URL', () => {
			const deferredService = new WebSocketService();
			const handler = vi.fn();

			const unsubscribe = deferredService.subscribe(['Sessions'], handler);

			// Ensure unsubscribe is still a callable function
			expect(unsubscribe).toBeTypeOf('function');
			// No socket should have been created
			expect(globalThis.WebSocket).not.toHaveBeenCalled();
		});

		it('should connect and restore subscriptions when updateUrl is called', () => {
			const deferredService = new WebSocketService();
			const handler = vi.fn();

			deferredService.subscribe(['Sessions'], handler);

			// Simulate token becoming available
			deferredService.updateUrl('http://example.com/socket?ApiKey=new-token');

			expect(globalThis.WebSocket).toHaveBeenCalledTimes(1);
		});

		it('should send start messages for deferred subscriptions once the socket opens', () => {
			const deferredService = new WebSocketService();

			deferredService.subscribe(['Sessions'], vi.fn());

			// Simulate token becoming available
			deferredService.updateUrl('http://example.com/socket?ApiKey=new-token');

			mockWebSocket.readyState = WebSocket.OPEN;
			mockWebSocket.__triggerOpen();

			expect(mockWebSocket.send).toHaveBeenCalledWith(
				JSON.stringify({ MessageType: 'SessionsStart', Data: '0,1000' })
			);
		});

		it('should remain disconnected if updateUrl is called with no existing subscriptions', () => {
			const deferredService = new WebSocketService();

			// No subscriptions added
			deferredService.updateUrl('http://example.com/socket?ApiKey=new-token');

			expect(globalThis.WebSocket).not.toHaveBeenCalled();
		});
	});
});
