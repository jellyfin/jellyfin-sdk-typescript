/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { AxiosInstance } from 'axios';

import { Api } from './api';
import { ClientInfo, DeviceInfo } from './models';

/**
 * The minimum supported server version.
 */
export const MINIMUM_VERSION = '10.7.0';

/**
 * Class representing the Jellyfin SDK.
 */
export class Jellyfin {
	clientInfo;
	deviceInfo;

	constructor(
		clientInfo: ClientInfo = { name: 'jellyfin-sdk-typescript', version: 'v0.1.0' },
		// FIXME: The device info should always be required.
		deviceInfo: DeviceInfo = { name: 'device-name', id: 'device-id' }
	) {
		this.clientInfo = clientInfo;
		this.deviceInfo = deviceInfo;
	}

	createApi(basePath: string, accessToken?: string, axiosInstance?: AxiosInstance): Api {
		return new Api(basePath, this.clientInfo, this.deviceInfo, accessToken, axiosInstance);
	}
}
