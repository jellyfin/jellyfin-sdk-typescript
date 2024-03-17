/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { describe, it, expect } from 'vitest';

import { Api, Jellyfin } from '..';
import { TEST_CLIENT, TEST_DEVICE, SERVER_URL } from '../__helpers__/common';

/**
 * Api Jellyfin tests.
 *
 * @group unit
 */
describe('Jellyfin', () => {
	it('should create an api instance', () => {
		const ACCESS_TOKEN = 'ACCESS TOKEN';
		const jellyfin = new Jellyfin({
			clientInfo: TEST_CLIENT,
			deviceInfo: TEST_DEVICE
		});

		const api = jellyfin.createApi(SERVER_URL, ACCESS_TOKEN);
		expect(api).toBeInstanceOf(Api);
		expect(api.basePath).toBe(SERVER_URL);
		expect(api.accessToken).toBe(ACCESS_TOKEN);
		expect(api.clientInfo).toBe(TEST_CLIENT);
		expect(api.deviceInfo).toBe(TEST_DEVICE);
	});
});
