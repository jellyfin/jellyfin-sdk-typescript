/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Jellyfin } from '..';
import { TEST_CLIENT, TEST_DEVICE } from '../__helpers__/common';

const SERVER_URL = 'https://demo.jellyfin.org/stable';

/**
 * SDK integration tests.
 *
 * @group integration
 */
describe('Test the Base SDK', () => {
	it('public users api', async () => {
		const jellyfin = new Jellyfin({
			clientInfo: TEST_CLIENT,
			deviceInfo: TEST_DEVICE
		});
		const api = jellyfin.createApi(SERVER_URL);

		const users = await api.userApi.getPublicUsers();
		// console.log('Users =>', users.data);
		expect(users.data).toBeTruthy();
	});

	it('public system info api', async () => {
		const jellyfin = new Jellyfin({
			clientInfo: TEST_CLIENT,
			deviceInfo: TEST_DEVICE
		});
		const api = jellyfin.createApi(SERVER_URL);

		const info = await api.systemApi.getPublicSystemInfo();
		// console.log('Info =>', info.data);
		expect(info.data).toBeTruthy();
	});

	it('user login api', async () => {
		const jellyfin = new Jellyfin({
			clientInfo: TEST_CLIENT,
			deviceInfo: TEST_DEVICE
		});
		const api = jellyfin.createApi(SERVER_URL);

		const auth = await api.authenticateUserByName({ Username: 'demo', Pw: '' });
		// console.log('Auth =>', auth.data);
		expect(auth.data).toBeTruthy();

		await api.logout();
	});

	it('library api', async () => {
		const jellyfin = new Jellyfin({
			clientInfo: TEST_CLIENT,
			deviceInfo: TEST_DEVICE
		});
		const api = jellyfin.createApi(SERVER_URL);

		await api.authenticateUserByName({ Username: 'demo', Pw: '' });

		const libraries = await api.libraryApi.getMediaFolders();
		// console.log('Libraries =>', libraries.data);
		expect(libraries.data).toBeTruthy();

		await api.logout();
	});
});
