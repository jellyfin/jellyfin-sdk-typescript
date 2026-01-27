/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { afterEach, beforeEach, describe, it, vi } from 'vitest';
import { expect } from 'vitest';

import { AUTHORIZATION_HEADER } from '../../constants';
import type { ForceKeepAliveMessage, SessionsStartMessage } from '../../generated-client';
import { WEBSOCKET_URL_PATH } from '../constants';
import { PeriodicListenerInterval } from '../models';
import { WebSocketService } from '../websocket-service';

vi.mock('../../api');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let mockWebSocket: any;

globalThis.WebSocket = vi.fn(function() {
	return mockWebSocket;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any;

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

		// Setup mock WebSocket with proper event handling
		const eventListeners: Record<string, ((event: Event) => void)[]> = {
			open: [],
			message: [],
			close: []
		};

		mockWebSocket = {
			readyState: WebSocket.CONNECTING,
			send: vi.fn(),
			close: vi.fn(),
			onopen: null,
			onmessage: null,
			onclose: null,
			addEventListener: vi.fn((event: string, handler: (event: Event) => void) => {
				if (event in eventListeners) {
					eventListeners[event].push(handler);
				}
			}),
			removeEventListener: vi.fn(),
			dispatchEvent: vi.fn(),
			// Helper to trigger events
			__triggerOpen: () => {
				eventListeners.open.forEach(handler => handler(new Event('open')));
			},
			__triggerMessage: (data: string) => {
				eventListeners.message.forEach(handler => handler(new MessageEvent('message', { data })));
			},
			__triggerClose: () => {
				eventListeners.close.forEach(handler => handler(new Event('close')));
			}
		};

		service = new WebSocketService(
			mockApi.getUri(WEBSOCKET_URL_PATH, {
				[AUTHORIZATION_HEADER]: mockApi.accessToken }
			)
		);
	});

	afterEach(() => {
		vi.clearAllMocks();
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

		it('should return socket readyState when socket exists', () => {
			mockWebSocket.readyState = WebSocket.OPEN;
			service.subscribe(['Sessions'], () => {});
			// The status should be updated to OPEN after socket opens
			mockWebSocket.__triggerOpen();
			expect(service.socketStatus).toBe(WebSocket.OPEN);
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

		it('should reconnect after 5 seconds on close', async () => {
			vi.useFakeTimers();
			mockWebSocket.readyState = WebSocket.OPEN;
			service.subscribe(['Sessions'], () => {});

			mockWebSocket.readyState = WebSocket.CLOSED;
			mockWebSocket.__triggerClose();

			vi.advanceTimersByTime(5000);

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
		it('should notify listener when status changes to OPEN', () => {
			const statusListener = vi.fn();
			mockWebSocket.readyState = WebSocket.OPEN;

			service.onStatusChange(statusListener);
			service.subscribe(['Sessions'], () => {});
			mockWebSocket.__triggerOpen();

			expect(statusListener).toHaveBeenCalledWith(WebSocket.OPEN);
		});

		it('should notify listener when status changes to disconnected', () => {
			const statusListener = vi.fn();
			mockWebSocket.readyState = WebSocket.OPEN;

			service.onStatusChange(statusListener);
			service.subscribe(['Sessions'], () => {});
			mockWebSocket.__triggerOpen();

			// Clear calls from onopen
			statusListener.mockClear();

			// Trigger disconnect
			mockWebSocket.__triggerClose();

			expect(statusListener).toHaveBeenCalledWith('disconnected');
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

			expect(listener1).toHaveBeenCalledWith(WebSocket.OPEN);
			expect(listener2).toHaveBeenCalledWith(WebSocket.OPEN);
		});

		it("should not notify listener if status doesn't change", () => {
			const statusListener = vi.fn();
			service.onStatusChange(statusListener);

			// Trigger duplicate status changes
			mockWebSocket.readyState = WebSocket.OPEN;
			service.subscribe(['Sessions'], () => {});
			mockWebSocket.__triggerOpen();
			mockWebSocket.__triggerOpen();

			// Should only be called once
			expect(statusListener).toHaveBeenCalledTimes(1);
		});
	});

	describe('forceKeepAlive message handling', () => {
		it('should handle ForceKeepAlive message and schedule KeepAlive response', () => {
			vi.useFakeTimers();
			mockWebSocket.readyState = WebSocket.OPEN;
			service.subscribe(['Sessions'], () => {});

			mockWebSocket.send.mockClear();

			// Simulate receiving ForceKeepAlive message with 1000ms delay
			const forceKeepAliveMessage = {
				MessageType: 'ForceKeepAlive',
				Data: 5000
			} as ForceKeepAliveMessage;

			mockWebSocket.__triggerMessage(JSON.stringify(forceKeepAliveMessage));

			// Verify no KeepAlive sent immediately
			expect(mockWebSocket.send).not.toHaveBeenCalled();

			// Advance timers by the delay
			vi.advanceTimersByTime(2500);

			// Verify KeepAlive message was sent
			expect(mockWebSocket.send).toHaveBeenCalledWith(
				JSON.stringify({ MessageType: 'KeepAlive' })
			);

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
				Data: 500
			} as ForceKeepAliveMessage;

			mockWebSocket.__triggerMessage(JSON.stringify(forceKeepAliveMessage));

			// Handler should not be called for ForceKeepAlive
			expect(handler).not.toHaveBeenCalled();

			vi.advanceTimersByTime(500);

			// Handler still should not be called after KeepAlive is sent
			expect(handler).not.toHaveBeenCalled();

			vi.useRealTimers();
		});

		it('should replace previous ForceKeepAlive timer when a new one arrives', () => {
			vi.useFakeTimers();
			mockWebSocket.readyState = WebSocket.OPEN;
			service.subscribe(['Sessions'], () => {});

			mockWebSocket.send.mockClear();

			// Send first ForceKeepAlive with 1000ms delay
			mockWebSocket.__triggerMessage(
				JSON.stringify({
					MessageType: 'ForceKeepAlive',
					Data: 1000
				} as ForceKeepAliveMessage)
			);

			// Advance 500ms (halfway through our threshold)
			vi.advanceTimersByTime(200);

			// Send another ForceKeepAlive with 500ms delay
			mockWebSocket.__triggerMessage(
				JSON.stringify({
					MessageType: 'ForceKeepAlive',
					Data: 500
				} as ForceKeepAliveMessage)
			);

			// Advance 250ms more (total 450ms from start, but only 250ms from second message)
			vi.advanceTimersByTime(250);

			// Should only have sent one KeepAlive (from the second ForceKeepAlive)
			expect(mockWebSocket.send).toHaveBeenCalledTimes(1);
			expect(mockWebSocket.send).toHaveBeenCalledWith(
				JSON.stringify({ MessageType: 'KeepAlive' })
			);

			vi.useRealTimers();
		});

		it('should handle ForceKeepAlive with different delay values', () => {
			vi.useFakeTimers();
			mockWebSocket.readyState = WebSocket.OPEN;
			service.subscribe(['Sessions'], () => {});

			mockWebSocket.send.mockClear();

			// Test with 2000ms delay
			mockWebSocket.__triggerMessage(
				JSON.stringify({
					MessageType: 'ForceKeepAlive',
					Data: 5000
				} as ForceKeepAliveMessage)
			);

			vi.advanceTimersByTime(1999);
			expect(mockWebSocket.send).not.toHaveBeenCalled();

			vi.advanceTimersByTime(501);
			expect(mockWebSocket.send).toHaveBeenCalledWith(
				JSON.stringify({ MessageType: 'KeepAlive' })
			);

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
				}),
				customConfig
			);

			mockWebSocket.readyState = WebSocket.OPEN;
			configuredService.subscribe(['Sessions'], () => {});

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
				}),
				partialConfig
			);

			mockWebSocket.readyState = WebSocket.OPEN;
			configuredService.subscribe(['ActivityLogEntry'], () => {});

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
				}),
				customConfig
			);

			mockWebSocket.readyState = WebSocket.OPEN;
			configuredService.subscribe(['Sessions', 'ActivityLogEntry'], () => {});

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
				}),
				customConfig
			);

			mockWebSocket.readyState = WebSocket.OPEN;
			configuredService.subscribe(['Sessions'], () => {});

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

			// Create fresh mock for this test to avoid shared state issues
			const localEventListeners: Record<string, ((event: Event) => void)[]> = {
				open: [],
				message: [],
				close: []
			};

			mockWebSocket.addEventListener = vi.fn((event: string, handler: (event: Event) => void) => {
				if (event in localEventListeners) {
					localEventListeners[event].push(handler);
				}
			});
			mockWebSocket.__triggerClose = () => {
				localEventListeners.close.forEach(handler => handler(new Event('close')));
			};

			mockWebSocket.readyState = WebSocket.OPEN;
			service.subscribe(['Sessions'], () => {});

			// Disconnect (simulating token cleared)
			service.disconnect();

			// Reset for clean state
			vi.mocked(globalThis.WebSocket).mockClear();
			localEventListeners.open = [];
			localEventListeners.message = [];
			localEventListeners.close = [];

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
});
