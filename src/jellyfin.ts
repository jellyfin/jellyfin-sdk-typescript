/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import globalInstance from 'axios';

import { Api } from './api';
import { Configuration } from './generated-client';
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
		clientInfo: ClientInfo = { Name: 'jellyfin-sdk-typescript', Version: 'v0.1.0' },
		// FIXME: The device info should always be required.
		deviceInfo: DeviceInfo = { Name: 'device-name', Id: 'device-id' }
	) {
		this.clientInfo = clientInfo;
		this.deviceInfo = deviceInfo;
	}

	createApi(configuration: Configuration, axiosInstance = globalInstance): Api {
		return new Api(this.clientInfo, this.deviceInfo, configuration, axiosInstance);
	}
}
