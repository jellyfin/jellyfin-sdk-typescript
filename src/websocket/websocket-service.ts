/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { InboundWebSocketMessage, OutboundWebSocketMessage } from '../generated-client';
import { buildWebSocketUrl } from '../utils';

import { RECONNECT_INITIAL_DELAY, RECONNECT_DELAY_FACTOR, RECONNECT_MAX_DELAY } from './constants';
import { SUBSCRIPTION_REGISTRY } from './constants';
import type { WebSocketSubscriptionIntervals } from './types';
import { OutboundWebSocketMessageType, PeriodicListenerInterval, type SocketMessageHandler, type SocketStatusHandler, type WebSocketStatus } from './types';

/**
 * A class used for managing the lifecycle of websocket connections
 * to Jellyfin
 */
export class WebSocketService {
	/**
     * The URL to connect to.
	 *
	 * Created in the constructor, using the fields from the authenticated Api instance.
     */
	private url: URL;

	/**
     * The active websocket connection, if one exists.
     */
	private socket: WebSocket | undefined;

	/**
	 * The keep-alive timeout handle.
	 *
	 * Indicates when the next keep-alive message should be sent.
	 */
	private keepAlive: NodeJS.Timeout | undefined;

	/**
	 * A map of message type subscriptions to their respective handlers
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private readonly subscriptions: Map<string, SocketMessageHandler<any>[]> = new Map();

	private subscriptionIntervals?: WebSocketSubscriptionIntervals;

	/**
	 * The number of consecutive reconnection attempts
	 */
	private reconnectionAttempts = 0;

	/**
	 * The timeout handle for reconnection
	 */
	private reconnectionTimeout: NodeJS.Timeout | undefined;

	/**
     * Status change event listeners
     */
	private readonly statusListeners: SocketStatusHandler[] = [];

	/**
     * Current connection status
     */
	private currentStatus: WebSocketStatus = 'disconnected';

	/**
     * Constructs a new instance of the {@link WebSocketService}
     *
     * @param uri The full URI path with the Authorization Header included as a query parameter
     */
	constructor(
		uri: string,
		config?: WebSocketSubscriptionIntervals
	) {
		this.url = buildWebSocketUrl(uri);
		this.subscriptionIntervals = config;
	}

	private initSocket() {
		this.socket = new WebSocket(this.url.toString());

		this.socket.addEventListener('open', () => {
			// Reset reconnection attempts on successful connection
			this.reconnectionAttempts = 0;

			// Update status and notify listeners
			this.setStatus(WebSocket.OPEN);

			// Attach all subscriptions, sending start messages as needed
			for (const type of this.subscriptions.keys()) {
				const mapping = SUBSCRIPTION_REGISTRY[type as OutboundWebSocketMessageType];
				if (mapping) {
					this.sendMessage(
						mapping.createStartMessage(
							this.subscriptionIntervals?.[type as OutboundWebSocketMessageType]
							?? new PeriodicListenerInterval(0, 1000)
						)
					);
				}
			}
		});

		this.socket.addEventListener('message', (event) => {
			const data = JSON.parse(event.data) as OutboundWebSocketMessage;

			const { MessageType } = data;

			if (MessageType === OutboundWebSocketMessageType.ForceKeepAlive && data.Data) {
				// Clear any existing keep-alive timeout
				if (this.keepAlive) clearTimeout(this.keepAlive);

				this.keepAlive = setTimeout(() =>
					this.sendMessage({
						MessageType: OutboundWebSocketMessageType.KeepAlive
					}), data.Data / 2
				);
			} else {
				const handlers = this.subscriptions.get(MessageType);
				handlers?.forEach(handler => handler(data));
			}
		});

		this.socket.addEventListener('close', () => {
			// Update status and notify listeners
			this.setStatus('disconnected');

			// Reconnect with exponential backoff if there are active subscriptions
			if (this.subscriptions.size > 0) {
				this.reconnectionAttempts++;
				const delay = this.calculateBackoffDelay();
				this.reconnectionTimeout = setTimeout(() => this.initSocket(), delay);
			} else {
				// Else, close and dispose
				this.socket = undefined;
				if (this.keepAlive) {
					clearTimeout(this.keepAlive);
					this.keepAlive = undefined;
				}
			}
		});
	}

	/**
	 * Calculates the exponential backoff delay for reconnection attempts
	 * @returns The delay in milliseconds, capped at the maximum
	 */
	private calculateBackoffDelay(): number {
		const exponentialDelay = RECONNECT_INITIAL_DELAY * Math.pow(RECONNECT_DELAY_FACTOR, this.reconnectionAttempts - 1);
		return Math.min(exponentialDelay, RECONNECT_MAX_DELAY);
	}

	private sendMessage(message: InboundWebSocketMessage) {
		if (this.socket?.readyState === WebSocket.OPEN) {
			this.socket.send(JSON.stringify(message));
		}
	}

	/**
     * Internal method to update status and notify all listeners
     */
	private setStatus(status: WebSocketStatus) {
		if (this.currentStatus !== status) {
			this.currentStatus = status;
			this.statusListeners.forEach(listener => listener(status));
		}
	}

	/**
     * Gets the current status of the websocket connection
     * @returns The connection status
     */
	get socketStatus(): WebSocketStatus | undefined {
		return this.currentStatus;
	}

	disconnect(): void {
		this.socket?.close();
		this.setStatus('disconnected');
		this.socket = undefined;
		this.reconnectionAttempts = 0;
		if (this.reconnectionTimeout) {
			clearTimeout(this.reconnectionTimeout);
			this.reconnectionTimeout = undefined;
		}
		if (this.keepAlive) {
			clearTimeout(this.keepAlive);
			this.keepAlive = undefined;
		}
	}

	updateUrl(uri: string) {
		this.socket?.close();

		this.url = buildWebSocketUrl(uri);

		if (this.subscriptions.size > 0) {
			this.initSocket();
		}
	}

	/**
     * Adds a listener for websocket status changes
     *
     * @param onStatusChange Callback invoked when the connection status changes
     * @returns A function which can be invoked to remove the listener
     */
	onStatusChange(onStatusChange: SocketStatusHandler): () => void {
		this.statusListeners.push(onStatusChange);
		return () => {
			const index = this.statusListeners.indexOf(onStatusChange);
			if (index !== -1) {
				this.statusListeners.splice(index, 1);
			}
		};
	}

	/**
     * Adds message listeners for the provided message types.
     *
     * Adding a listener will establish a websocket connection if one does not already exist.
     *
     * Listeners will be automatically resubscribed if the connection is lost and re-established.
     *
     * Listeners can be removed by invoking the returned unsubscribe function.
     *
     * @param messageTypes Any array of {@link OutboundWebSocketMessage} message types to listen for
     * @param onMessage The callback to invoke when a message is received
     *
	 * @example
	 * const unsubscribe = api.webSocket.subscribe([OutboundWebSocketMessageType.Sessions], (message) => {
	 *   console.log('Received session update:', message);
	 * });
	 *
     * @returns A function which can be invoked to remove the added listeners
     */
	subscribe<T extends OutboundWebSocketMessageType>(messageTypes: T[], onMessage: SocketMessageHandler<T>) {
		if (!this.socket || this.socket.readyState === WebSocket.CLOSED) {
			this.initSocket();
		}

		for (const type of messageTypes) {
			const isNewType = !this.subscriptions.has(type);

			if (isNewType) {
				this.subscriptions.set(type, []);

				// Send start message as needed, depending on the messageType
				const mapping = SUBSCRIPTION_REGISTRY[type];
				if (mapping && this.socket?.readyState === WebSocket.OPEN) {
					this.sendMessage(
						mapping.createStartMessage(
							this.subscriptionIntervals?.[type as OutboundWebSocketMessageType]
							?? new PeriodicListenerInterval(0, 1000)
						)
					);
				}
			}

            this.subscriptions.get(type)!.push(onMessage);
		}

		// Return an unsubscription function
		return () => {
			for (const type of messageTypes) {
				const handlers = this.subscriptions.get(type);
				if (!handlers) continue;

				const index = handlers.indexOf(onMessage);
				if (index !== -1) handlers.splice(index, 1);

				if (handlers.length === 0) {
					this.subscriptions.delete(type);
					// Send Stop Message
					const mapping = SUBSCRIPTION_REGISTRY[type];
					if (mapping) this.sendMessage(mapping.createStopMessage());
				}
			}

			if (this.subscriptions.size === 0) {
				this.socket?.close();
				this.setStatus('disconnected');
				this.reconnectionAttempts = 0;
				if (this.reconnectionTimeout) {
					clearTimeout(this.reconnectionTimeout);
					this.reconnectionTimeout = undefined;
				}
			}
		};
	}
}
