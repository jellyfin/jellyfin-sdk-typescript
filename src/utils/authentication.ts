/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import type { ClientInfo, DeviceInfo } from '../models';

import { safeEncodeURIComponent } from './url';

/**
 * Returns a valid authorization header string.
 */
export function getAuthorizationHeader(clientInfo: ClientInfo, deviceInfo: DeviceInfo, accessToken = ''): string {
	return [
		`MediaBrowser Client="${safeEncodeURIComponent(clientInfo.name)}"`,
		`Device="${safeEncodeURIComponent(deviceInfo.name)}"`,
		`DeviceId="${safeEncodeURIComponent(deviceInfo.id)}"`,
		`Version="${safeEncodeURIComponent(clientInfo.version)}"`,
		`Token="${safeEncodeURIComponent(accessToken)}"`
	].join(', ');
}
