/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { DeviceInfo } from './generated-client';
import { ClientInfo } from './models';

/**
 * Returns a valid authorization header string.
 */
export function getAuthorizationHeader(clientInfo: ClientInfo, deviceInfo: DeviceInfo, accessToken = ''): string {
	// TODO: We should ensure values are properly escaped
	return [
		`MediaBrowser Client="${clientInfo.Name}"`,
		`Device="${deviceInfo.Name}"`,
		`DeviceId="${deviceInfo.Id}"`,
		`Version="${clientInfo.Version}"`,
		`Token="${accessToken}"`
	].join(', ');
}
