import { AUTHORIZATION_PARAMETER } from '../constants';
import type { InboundWebSocketMessage, OutboundWebSocketMessage } from '../generated-client';

import { RECONNECT_TIMEOUT_INTERVAL, WEBSOCKET_URL_PATH } from './configs';
import { SUBSCRIPTION_REGISTRY } from './constants';
import { OutboundWebSocketMessageType, type SocketMessageHandler, type SocketStatusHandler, type WebSocketStatus } from './types';

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
	) {
		this.url = new URL(
			uri.replace(/^http/, 'ws')
		);
	}

	private initSocket() {
		this.socket = new WebSocket(this.url.toString());

		this.socket.onopen = () => {
			// Update status and notify listeners
			this.setStatus(WebSocket.OPEN);

			// Attach all subscriptions, sending start messages as needed
			for (const type of this.subscriptions.keys()) {
				const mapping = SUBSCRIPTION_REGISTRY[type as OutboundWebSocketMessageType];
				if (mapping) this.sendMessage(mapping.createStartMessage());
			}
		};

		this.socket.onmessage = (event) => {
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
		};

		this.socket.onclose = () => {
			// Update status and notify listeners
			this.setStatus('disconnected');

			// Reconnect after 5 seconds if there are active subscriptions
			if (this.subscriptions.size > 0) {
				setTimeout(() => this.initSocket(), RECONNECT_TIMEOUT_INTERVAL);
			} else {
				// Else, close and dispose
				this.socket = undefined;
				if (this.keepAlive) {
					clearTimeout(this.keepAlive);
					this.keepAlive = undefined;
				}
			}
		};
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
		if (this.keepAlive) {
			clearTimeout(this.keepAlive);
			this.keepAlive = undefined;
		}
	}

	updateUrl(uri: string) {
		this.socket?.close();

		this.url = new URL(
			uri.replace(/^http/, 'ws')
		);

		this.initSocket();
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
     * Adds message listeners for the provided message types
     *
     * Adding a listener will establish a websocket connection if one does not already exist
     *
     * Listeners will be automatically re-added if the connection is lost and re-established
     *
     * Listeners can be removed by invoking the returned unsubscribe function
     *
     * @param messageTypes Any array of {@link OutboundWebSocketMessage} message types to listen for
     * @param onMessage The callback to invoke when a message is received
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
					this.sendMessage(mapping.createStartMessage());
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
			}
		};
	}
}
