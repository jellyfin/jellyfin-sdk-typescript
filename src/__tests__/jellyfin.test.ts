/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Api, Jellyfin } from '..';

const SERVER_URL = 'https://example.com';

const TEST_CLIENT = {
	name: 'sdk-test-client',
	version: '0.0.0'
};

const TEST_DEVICE = {
	name: 'device-name',
	id: 'device-id'
};

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
