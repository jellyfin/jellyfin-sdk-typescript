/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { it, expect, describe } from 'vitest';

import { TEST_CLIENT, TEST_DEVICE } from '../__helpers__/common';

import { Jellyfin } from '../jellyfin';
import { RecommendedServerInfoScore } from '../models/recommended-server-info';
import { getSessionApi } from '../utils/api/session-api';
import { getSystemApi } from '../utils/api/system-api';
import { getUserApi } from '../utils/api/user-api';
import { getUserViewsApi } from '../utils/api/user-views-api';

const SERVER_URL = process.env.JF_TS_SDK_SERVER || 'https://demo.jellyfin.org/stable';
const USERNAME = process.env.JF_TS_SDK_USER_NAME || 'demo';
const PASSWORD = process.env.JF_TS_SDK_USER_PWD;

/**
 * SDK integration tests.
 *
 * @group integration
 */
describe('Test the Base SDK', () => {
	it('should recommend servers based on entered url', async () => {
		const jellyfin = new Jellyfin({
			clientInfo: TEST_CLIENT,
			deviceInfo: TEST_DEVICE
		});

		const url = new URL(SERVER_URL);
		const servers = await jellyfin.discovery.getRecommendedServerCandidates(url.host + url.pathname);
		expect(servers).toHaveLength(5);
		expect(servers[0].score).toBe(RecommendedServerInfoScore.GREAT);

		const bestServer = jellyfin.discovery.findBestServer(servers);
		expect(bestServer?.address).toBe(SERVER_URL);
	});

	it('public users api', async () => {
		const jellyfin = new Jellyfin({
			clientInfo: TEST_CLIENT,
			deviceInfo: TEST_DEVICE
		});
		const api = jellyfin.createApi(SERVER_URL);

		const users = await getUserApi(api).getPublicUsers();
		// console.log('Users =>', users.data);
		expect(users.data).toBeTruthy();
	});

	it('public system info api', async () => {
		const jellyfin = new Jellyfin({
			clientInfo: TEST_CLIENT,
			deviceInfo: TEST_DEVICE
		});
		const api = jellyfin.createApi(SERVER_URL);

		const info = await getSystemApi(api).getPublicSystemInfo();
		// console.log('Info =>', info.data);
		expect(info.data).toBeTruthy();
	});

	it('user login api', async () => {
		const jellyfin = new Jellyfin({
			clientInfo: TEST_CLIENT,
			deviceInfo: TEST_DEVICE
		});
		const api = jellyfin.createApi(SERVER_URL);

		const auth = await getUserApi(api)
			.authenticateUserByName({ authenticateUserByName: { Username: USERNAME, Pw: PASSWORD } });
		// console.log('Auth =>', auth.data);
		expect(auth.data).toBeTruthy();
		expect(api.accessToken).not.toBe('');

		await getSessionApi(api).reportSessionEnded();
		expect(api.accessToken).toBe('');
	});

	it('user views api', async () => {
		const jellyfin = new Jellyfin({
			clientInfo: TEST_CLIENT,
			deviceInfo: TEST_DEVICE
		});
		const api = jellyfin.createApi(SERVER_URL);

		await getUserApi(api)
			.authenticateUserByName({ authenticateUserByName: { Username: USERNAME, Pw: PASSWORD } });

		const views = await getUserViewsApi(api).getUserViews();
		// console.log('User Views =>', views.data);
		expect(views.data).toBeTruthy();

		await getSessionApi(api).reportSessionEnded();
	});
});
