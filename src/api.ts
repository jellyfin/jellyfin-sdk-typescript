/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import type { AxiosInstance, AxiosResponse } from 'axios';
import globalInstance from 'axios';

import { Configuration } from './generated-client/configuration';
import type { AuthenticationResult } from './generated-client/models/authentication-result';
import type { ClientInfo, DeviceInfo } from './models';
import { getAuthorizationHeader } from './utils';
import { getSessionApi } from './utils/api/session-api';
import { getUserApi } from './utils/api/user-api';
import { WebSocketService } from './websocket';
import { AUTHORIZATION_HEADER, AUTHORIZATION_PARAMETER } from './constants';
import { WEBSOCKET_URL_PATH } from './websocket/configs';

/** Class representing the Jellyfin API. */
export class Api {
	private _basePath;
	private _clientInfo;
	private _deviceInfo;
	private _accessToken;

	readonly axiosInstance;

	/**
	 * Service for managing subscriptions to Outbound WebSocket events.
	 * 
	 * This service is automatically instantiated when an access token is present.
	 * 
	 * If the access token is cleared via the {@link update} method, the WebSocket
	 * connection will be closed and this value will be set to `undefined`.
	 */
	webSocket?: WebSocketService;

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
					[AUTHORIZATION_HEADER]: this.authorizationHeader
				}
			}
		});
	}

	/**
	 * Convenience method for authenticating a user by name.
	 * @deprecated Use `getUserApi().authenticateUserByName()` instead.
	 * @param username The username.
	 * @param password The user password if required.
	 */
	authenticateUserByName(username: string, password?: string): Promise<AxiosResponse<AuthenticationResult>> {
		return getUserApi(this).authenticateUserByName(
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
\	 * 
	 * @param data The data to update.
	 */
	update(data: Partial<{ 
		basePath: string; 
		clientInfo: ClientInfo; 
		deviceInfo: DeviceInfo; 
		accessToken: string 
	}>): void {
		if (data.basePath !== undefined) {
			this._basePath = data.basePath;
		}
		if (data.clientInfo !== undefined) {
			this._clientInfo = data.clientInfo;
		}
		if (data.deviceInfo !== undefined) {
			this._deviceInfo = data.deviceInfo;
		}
		if (data.accessToken !== undefined) {
			this._accessToken = data.accessToken;
		}

		if (this.accessToken.length !== 0) {
			// Token is present, reconnect if socket exists
			if (this.webSocket) {
				this.webSocket.updateUrl(
					this.getUri(WEBSOCKET_URL_PATH, {
						[AUTHORIZATION_PARAMETER]: this.accessToken
					})
				);
			} else {
				this.webSocket = new WebSocketService(
					this.getUri(WEBSOCKET_URL_PATH, {
						[AUTHORIZATION_PARAMETER]: this.accessToken
					})
				);
			}
		} else {
			// Token was cleared, dispose of WebSocket
			if (this.webSocket) {
				this.webSocket.disconnect();
			}
		}
	}

	get authorizationHeader(): string {
		return getAuthorizationHeader(this._clientInfo, this._deviceInfo, this._accessToken);
	}
}
