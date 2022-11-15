/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import axios from 'axios';

import { RecommendedServerDiscovery } from '..';
import { API_VERSION, Jellyfin, MINIMUM_VERSION, ProductNameIssue, RecommendedServerInfoScore, SlowResponseIssue, SystemInfoIssue, VersionMissingIssue, VersionOutdatedIssue, VersionUnsupportedIssue } from '../..';
import { TEST_CLIENT, TEST_DEVICE } from '../../__helpers__/common';
import { itIf } from '../../__helpers__/it-if';

jest.mock('axios');
const mockAxios = jest.mocked(axios, { shallow: false });

const ADDRESS = 'https://example.com';
const PRODUCT_NAME = 'Jellyfin Server';
const SDK_INSTANCE = new Jellyfin({
	clientInfo: TEST_CLIENT,
	deviceInfo: TEST_DEVICE
});

/**
 * RecommendedServerDiscovery class tests.
 *
 * @group unit/discovery
 */
describe('RecommendedServerDiscovery', () => {
	describe('fetchRecommendedServerInfo()', () => {
		it('should fetch the server info', async () => {
			const serverDiscovery = new RecommendedServerDiscovery(SDK_INSTANCE);
			const systemInfo = {
				Version: API_VERSION,
				ProductName: PRODUCT_NAME
			};

			mockAxios.request.mockResolvedValueOnce({ data: systemInfo });
			const info = await serverDiscovery.fetchRecommendedServerInfo(ADDRESS);

			expect(info.address).toBe(ADDRESS);
			expect(info.issues).toHaveLength(0);
			expect(info.score).toBe(RecommendedServerInfoScore.GREAT);
			expect(info.systemInfo).toBe(systemInfo);
		});

		it('should return issues for invalid product name and unsupported versions', async () => {
			const serverDiscovery = new RecommendedServerDiscovery(SDK_INSTANCE);
			const systemInfo = {
				Version: '4.0.0',
				ProductName: 'Invalid Server'
			};

			mockAxios.request.mockResolvedValueOnce({ data: systemInfo });
			const info = await serverDiscovery.fetchRecommendedServerInfo(ADDRESS);

			expect(info.address).toBe(ADDRESS);
			expect(info.issues).toHaveLength(2);
			expect(info.issues[0]).toBeInstanceOf(ProductNameIssue);
			expect((info.issues[0] as ProductNameIssue).productName).toBe('Invalid Server');
			expect(info.issues[1]).toBeInstanceOf(VersionUnsupportedIssue);
			expect((info.issues[1] as VersionUnsupportedIssue).version).toBe('4.0.0');
			expect(info.score).toBe(RecommendedServerInfoScore.BAD);
			expect(info.systemInfo).toBe(systemInfo);
		});

		/* eslint-disable jest/no-standalone-expect */
		// NOTE: This test will only work if API_VERSION and MINIMUM_VERSION are not the same!
		itIf(API_VERSION.toString() !== MINIMUM_VERSION.toString(), 'should return an issue for outdated versions', async () => {
			const serverDiscovery = new RecommendedServerDiscovery(SDK_INSTANCE);
			const systemInfo = {
				Version: MINIMUM_VERSION,
				ProductName: PRODUCT_NAME
			};

			mockAxios.request.mockResolvedValueOnce({ data: systemInfo });
			const info = await serverDiscovery.fetchRecommendedServerInfo(ADDRESS);

			expect(info.address).toBe(ADDRESS);
			expect(info.issues).toHaveLength(1);
			expect(info.issues[0]).toBeInstanceOf(VersionOutdatedIssue);
			expect((info.issues[0] as VersionOutdatedIssue).version).toBe(MINIMUM_VERSION);
			expect(info.score).toBe(RecommendedServerInfoScore.GOOD);
			expect(info.systemInfo).toBe(systemInfo);
		});
		/* eslint-enable jest/no-standalone-expect */

		it('should return an issue for slow responses', async () => {
			const serverDiscovery = new RecommendedServerDiscovery(SDK_INSTANCE);
			const systemInfo = {
				Version: API_VERSION,
				ProductName: PRODUCT_NAME
			};

			const now = Date.now();
			jest.useFakeTimers()
				.setSystemTime(now);

			mockAxios.request.mockImplementationOnce(() => {
				jest.setSystemTime(now + 3001);
				return Promise.resolve({ data: systemInfo });
			});
			const info = await serverDiscovery.fetchRecommendedServerInfo(ADDRESS);

			expect(info.address).toBe(ADDRESS);
			expect(info.issues).toHaveLength(1);
			expect(info.issues[0]).toBeInstanceOf(SlowResponseIssue);
			expect((info.issues[0] as SlowResponseIssue).responseTime).toBeGreaterThan(3000);
			expect(info.score).toBe(RecommendedServerInfoScore.GOOD);
			expect(info.systemInfo).toBe(systemInfo);

			jest.useRealTimers();
		});

		it('should return an issue for failed requests', async () => {
			const serverDiscovery = new RecommendedServerDiscovery(SDK_INSTANCE);
			const error = 'Error';

			mockAxios.request.mockRejectedValueOnce(error);
			const info = await serverDiscovery.fetchRecommendedServerInfo(ADDRESS);

			expect(info.address).toBe(ADDRESS);
			expect(info.issues).toHaveLength(2);
			expect(info.issues[0]).toBeInstanceOf(SystemInfoIssue);
			expect((info.issues[0] as SystemInfoIssue).error).toBe(error);
			expect(info.issues[1]).toBeInstanceOf(VersionMissingIssue);
			expect(info.score).toBe(RecommendedServerInfoScore.BAD);
			expect(info.systemInfo).toBeUndefined();
		});
	});

	describe('discover()', () => {
		it('should discover servers and filter servers with bad scores', async () => {
			const serverDiscovery = new RecommendedServerDiscovery(SDK_INSTANCE);
			const systemInfo = {
				Version: API_VERSION,
				ProductName: PRODUCT_NAME
			};

			mockAxios.request
				.mockResolvedValueOnce({ data: systemInfo })
				.mockRejectedValueOnce('Error');

			const results = await serverDiscovery.discover(['https://example.com', 'http://example.com']);

			expect(results).toHaveLength(2);
		});

		it('should filter servers with bad scores', async () => {
			const serverDiscovery = new RecommendedServerDiscovery(SDK_INSTANCE);
			const systemInfo = {
				Version: API_VERSION,
				ProductName: PRODUCT_NAME
			};

			mockAxios.request
				.mockResolvedValueOnce({ data: systemInfo })
				.mockRejectedValueOnce('Error');

			const results = await serverDiscovery.discover(['https://example.com', 'http://example.com'], RecommendedServerInfoScore.GOOD);

			expect(results).toHaveLength(1);
		});
	});
});
