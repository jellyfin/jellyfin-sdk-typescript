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

/** The authorization header field name. */
export const AUTHORIZATION_HEADER = 'Authorization';

/** The authorization query parameter name. */
export const AUTHORIZATION_PARAMETER = 'ApiKey';

/** Class representing the Jellyfin API. */
export class Api {
	basePath;
	clientInfo;
	deviceInfo;
	accessToken;
	axiosInstance;
	webSocket;

	constructor(
		basePath: string,
		clientInfo: ClientInfo,
		deviceInfo: DeviceInfo,
		accessToken = '',
		axiosInstance: AxiosInstance = globalInstance
	) {
		// Remove trailing slash if present
		this.basePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
		this.clientInfo = clientInfo;
		this.deviceInfo = deviceInfo;
		this.accessToken = accessToken;
		this.axiosInstance = axiosInstance;
		this.webSocket = new WebSocketService(this)
	}

	get configuration(): Configuration {
		return new Configuration({
			basePath: this.basePath,
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
			baseURL: this.basePath,
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

	get authorizationHeader(): string {
		return getAuthorizationHeader(this.clientInfo, this.deviceInfo, this.accessToken);
	}
}
