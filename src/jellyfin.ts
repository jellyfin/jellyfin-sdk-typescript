/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { AxiosInstance } from 'axios';

import { Api } from './api';
import { DiscoveryService } from './discovery';
import { ClientInfo, DeviceInfo } from './models';

/** Parameters to create a Jellyfin SDK instance. */
export interface JellyfinParameters {
	clientInfo: ClientInfo,
	deviceInfo: DeviceInfo
}

/** The current API version of the generated client. */
export const API_VERSION = '10.8.5';

/** The minimum supported server version. */
export const MINIMUM_VERSION = '10.8.0';

/** Class representing the Jellyfin SDK. */
export class Jellyfin {
	clientInfo;
	deviceInfo;
	discovery;

	constructor(parameters: JellyfinParameters) {
		this.clientInfo = parameters.clientInfo;
		this.deviceInfo = parameters.deviceInfo;
		this.discovery = new DiscoveryService(this);
	}

	/**
	 * Creates an Api instance for a given server path.
	 * @param basePath A base path of a server.
	 * @param accessToken An (optional) access token to use for authentication.
	 * @param axiosInstance An (optional) Axios instance for the Api to use.
	 * @returns An Api instance.
	 */
	createApi(basePath: string, accessToken?: string, axiosInstance?: AxiosInstance): Api {
		return new Api(basePath, this.clientInfo, this.deviceInfo, accessToken, axiosInstance);
	}
}
