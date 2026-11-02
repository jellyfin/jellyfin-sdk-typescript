/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import type { AxiosInstance, AxiosResponse } from 'axios';
import globalInstance from 'axios';

import { ACCEPT_LANGUAGE_HEADER, AUTHORIZATION_HEADER, AUTHORIZATION_PARAMETER } from './constants';
import { Configuration } from './generated-client/configuration';
import type { AuthenticationResult } from './generated-client/models/authentication-result';
import type { ClientInfo, DeviceInfo } from './models';
import { getAuthorizationHeader } from './utils';
import { getAuthenticationApi } from './utils/api/authentication-api';
import { getSessionApi } from './utils/api/session-api';
import type {
	OutboundWebSocketMessageType,
	SocketMessageHandler,
	SocketStatusHandler,
	WebSocketStatus,
	WebSocketSubscriptionIntervals
} from './websocket';
import { WebSocketService } from './websocket';
import { WEBSOCKET_URL_PATH } from './websocket/constants';

/** Class representing the Jellyfin API. */
export class Api {
	private _basePath;
	private _clientInfo;
	private _deviceInfo;
	private _accessToken;

	readonly axiosInstance;

	private webSocket: WebSocketService | undefined;

	constructor(
		basePath: string,
		clientInfo: ClientInfo,
		deviceInfo: DeviceInfo,
		accessToken = '',
		axiosInstance: AxiosInstance = globalInstance
	) {
		// Remove trailing slash if present
		this._basePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
		this._clientInfo = clientInfo;
		this._deviceInfo = deviceInfo;
		this._accessToken = accessToken;
		this.axiosInstance = axiosInstance;
	}

	get accessToken(): string {
		return this._accessToken;
	}

	get basePath(): string {
		return this._basePath;
	}

	get clientInfo(): ClientInfo {
		return this._clientInfo;
	}

	get deviceInfo(): DeviceInfo {
		return this._deviceInfo;
	}

	get configuration(): Configuration {
		return new Configuration({
			basePath: this._basePath,
			baseOptions: {
				headers: {
					[AUTHORIZATION_HEADER]: this.authorizationHeader,
					[ACCEPT_LANGUAGE_HEADER]: this.acceptLanguageHeader
				}
			}
		});
	}

	private instantiateWebSocket(): WebSocketService {
		// Pass undefined when there is no access token so subscriptions are stored
		// but no connection attempt is made until updateUrl() is called later.
		return new WebSocketService(
			this.accessToken
				? this.getUri(WEBSOCKET_URL_PATH, {
					[AUTHORIZATION_PARAMETER]: this.accessToken
				})
				: undefined
		);
	}

	private get webSocketService(): WebSocketService {
		if (!this.webSocket) {
			this.webSocket = this.instantiateWebSocket();
		}

		return this.webSocket;
	}

	/**
	 * Convenience method for authenticating a user by name.
	 * @deprecated Use `getAuthenticationApi().authenticateUserByName()` instead.
	 * @param username The username.
	 * @param password The user password if required.
	 */
	authenticateUserByName(username: string, password?: string): Promise<AxiosResponse<AuthenticationResult>> {
		return getAuthenticationApi(this).authenticateUserByName(
			// The axios client does some strange wrapping of the param object
			{ authenticateUserByName: { Username: username, Pw: password } }
		);
	}

	/**
	 * Gets a full URI for a relative URL to the Jellyfin server for a given SDK Api instance.
	 * @param url The relative URL.
	 * @param params Any URL parameters.
	 * @returns The complete URI with protocol, host, and base URL (if any).
	 */
	getUri(url: string, params?: object) {
		return this.axiosInstance.getUri({
			baseURL: this._basePath,
			url,
			params
		});
	}

	/**
	 * Convenience method for logging out.
	 * @deprecated Use `getSessionApi().reportSessionEnded()` instead.
	 */
	logout(): Promise<AxiosResponse<never> | AxiosResponse<void>> {
		return getSessionApi(this).reportSessionEnded();
	}

	/**
	 * Updates this {@link Api} instance with new data.
	 *
	 * If the access token is cleared, any existing WebSocket connection will be closed.
	 *
	 * If the base path or access token changes while a WebSocket connection is active,
	 * the connection will be reconnected with the new credentials.
	 *
	 * @param data The data to update.
	 */
	update(data: Partial<{
		basePath: string;
		clientInfo: ClientInfo;
		deviceInfo: DeviceInfo;
		accessToken: string;
	}>): void {
		if (data.basePath) {
			this._basePath = data.basePath;
		}
		if (data.clientInfo) {
			this._clientInfo = data.clientInfo;
		}
		if (data.deviceInfo) {
			this._deviceInfo = data.deviceInfo;
		}
		if (data.accessToken !== undefined) {
			this._accessToken = data.accessToken;
		}

		if (
			data.accessToken ||
			(data.basePath && this.accessToken)
		) {
			this.webSocket?.updateUrl(
				this.getUri(WEBSOCKET_URL_PATH, {
					[AUTHORIZATION_PARAMETER]: this.accessToken
				})
			);
		} else if (data.accessToken === '') {
			// Token was cleared, dispose of WebSocket
			this.webSocket?.disconnect();
		}
	}

	get authorizationHeader(): string {
		return getAuthorizationHeader(this._clientInfo, this._deviceInfo, this._accessToken);
	}

	get acceptLanguageHeader(): string | undefined {
		const languages = this._deviceInfo.languages;
		return languages?.length ? languages.join(',') : undefined;
	}

	/**
	 * Subscribes to WebSocket messages of the provided types.
	 *
	 * Subscribing opens the WebSocket connection if one is not already open. Subscriptions are restored
	 * automatically after a reconnection, and the connection is closed once every subscription is removed.
	 *
	 * @param messageTypes The {@link OutboundWebSocketMessageType}s to listen for
	 * @param onMessage The callback to invoke when a message is received
	 * @param subscriptionIntervals Optional intervals for message types the server sends periodically, e.g. `Sessions`
	 *
	 * @example
	 * const unsubscribe = api.subscribe(
	 *   [OutboundWebSocketMessageType.Sessions],
	 *   (message) => {
	 *     console.log('Received session update:', message.Data);
	 *   },
	 *   {
	 *     // Send session updates immediately, then every 5 seconds
	 *     [OutboundWebSocketMessageType.Sessions]: new PeriodicListenerInterval(0, 5000)
	 *   }
	 * );
	 *
	 * // Later, stop listening
	 * unsubscribe();
	 *
	 * @returns A function which can be invoked to remove the subscription
	 */
	subscribe<T extends OutboundWebSocketMessageType>(
		messageTypes: T[],
		onMessage: SocketMessageHandler<T>,
		subscriptionIntervals?: WebSocketSubscriptionIntervals
	) {
		return this.webSocketService.subscribe(messageTypes, onMessage, subscriptionIntervals);
	}

	/**
	 * The current status of the WebSocket connection.
	 */
	get webSocketStatus(): WebSocketStatus {
		return this.webSocket?.socketStatus ?? 'disconnected';
	}

	/**
	 * Adds a listener for WebSocket status changes.
	 *
	 * The listener is invoked with a {@link WebSocketStatusEvent} each time {@link webSocketStatus} changes.
	 * Narrow on `status` to access the details of each event, such as the delay before a reconnection attempt.
	 *
	 * This is an arrow function, so it can be passed around without binding it to the {@link Api} instance.
	 *
	 * @param onStatusChange The callback to invoke when the connection status changes
	 *
	 * @example
	 * const removeListener = api.onWebSocketStatusChange((event) => {
	 *   switch (event.status) {
	 *     case WebSocketStatuses.Open:
	 *       console.log('Connected');
	 *       break;
	 *     case WebSocketStatuses.Reconnecting:
	 *       console.log(`Connection lost, retrying in ${event.delay}ms (attempt ${event.attempt})`);
	 *       break;
	 *     case WebSocketStatuses.Disconnected:
	 *       if (!event.intentional) console.log('Gave up reconnecting, see reconnectWebSocket()');
	 *       break;
	 *   }
	 * });
	 *
	 * // Later, stop listening
	 * removeListener();
	 *
	 * @returns A function which can be invoked to remove the listener
	 */
	onWebSocketStatusChange = (onStatusChange: SocketStatusHandler): (() => void) => {
		return this.webSocketService.onStatusChange(onStatusChange);
	};

	/**
	 * Reconnects the WebSocket immediately, restarting the reconnection backoff.
	 *
	 * The WebSocket stops reconnecting after too many failed attempts and reports an unintentional
	 * `disconnected` status. Subscriptions are preserved, so calling this restores them, e.g. from a
	 * "Retry" button or when the network comes back.
	 *
	 * Does nothing if there is no access token or there are no active subscriptions.
	 *
	 * @example
	 * // Offer a retry once the WebSocket gives up reconnecting
	 * api.onWebSocketStatusChange((event) => {
	 *   if (event.status === WebSocketStatuses.Disconnected && !event.intentional) {
	 *     showRetryButton(() => api.reconnectWebSocket());
	 *   }
	 * });
	 *
	 * @example
	 * // Reconnect straight away when the browser comes back online, rather than waiting for the backoff
	 * window.addEventListener('online', () => api.reconnectWebSocket());
	 */
	reconnectWebSocket(): void {
		this.webSocket?.reconnect();
	}
}
