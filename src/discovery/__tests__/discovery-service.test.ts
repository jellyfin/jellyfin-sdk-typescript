/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { vi, describe, it, expect, afterEach } from 'vitest';

import { TEST_CLIENT, TEST_DEVICE } from '../../__helpers__/common';
import { Jellyfin } from '../../jellyfin';
import { RecommendedServerInfoScore } from '../../models/recommended-server-info';
import { getAddressCandidates } from '../../utils/address-candidates';
import { DiscoveryService } from '../discovery-service';
import { RecommendedServerDiscovery } from '../recommended-server-discovery';

vi.mock('../../utils/address-candidates');
const mockGetAddressCandidates = vi.mocked(getAddressCandidates);

vi.mock('../recommended-server-discovery');
const mockRecommendedServerDiscovery = vi.mocked(RecommendedServerDiscovery);

const TEST_URLS = [
	'https://example.com',
	'http://example.com'
];

/**
 * DiscoveryService class tests.
 *
 * @group unit/discovery
 */
describe('DiscoveryService', () => {
	afterEach(() => {
		vi.clearAllMocks();
	});

	describe('findBestServer()', () => {
		const jellyfin = new Jellyfin({
			clientInfo: TEST_CLIENT,
			deviceInfo: TEST_DEVICE
		});
		const discovery = new DiscoveryService(jellyfin);
		const GREAT_SERVER = {
			address: '',
			responseTime: 1,
			score: RecommendedServerInfoScore.GREAT,
			issues: []
		};
		const GOOD_SERVER = {
			address: '',
			responseTime: 1,
			score: RecommendedServerInfoScore.GOOD,
			issues: []
		};
		const OK_SERVER = {
			address: '',
			responseTime: 1,
			score: RecommendedServerInfoScore.OK,
			issues: []
		};
		const BAD_SERVER = {
			address: '',
			responseTime: 1,
			score: RecommendedServerInfoScore.BAD,
			issues: []
		};

		it('should return a GREAT server if one exists', () => {
			const best = discovery.findBestServer([ BAD_SERVER, OK_SERVER, GOOD_SERVER, GREAT_SERVER ]);
			expect(best).toBe(GREAT_SERVER);
		});

		it('should return a GOOD server if one exists', () => {
			const best = discovery.findBestServer([ BAD_SERVER, OK_SERVER, GOOD_SERVER, BAD_SERVER ]);
			expect(best).toBe(GOOD_SERVER);
		});

		it('should return a OK server if one exists', () => {
			const best = discovery.findBestServer([ BAD_SERVER, OK_SERVER, BAD_SERVER, BAD_SERVER ]);
			expect(best).toBe(OK_SERVER);
		});

		it('should return undefined if only BAD servers exist', () => {
			const best = discovery.findBestServer([ BAD_SERVER, BAD_SERVER, BAD_SERVER, BAD_SERVER ]);
			expect(best).toBeUndefined();
		});
	});

	it('should return a list of candidates', () => {
		const jellyfin = new Jellyfin({
			clientInfo: TEST_CLIENT,
			deviceInfo: TEST_DEVICE
		});
		const discovery = new DiscoveryService(jellyfin);
		expect(RecommendedServerDiscovery).toHaveBeenCalled();

		discovery.getAddressCandidates('example.com');
		expect(getAddressCandidates).toHaveBeenCalled();
	});

	it('should return a list of recommended servers', async () => {
		const jellyfin = new Jellyfin({
			clientInfo: TEST_CLIENT,
			deviceInfo: TEST_DEVICE
		});
		const discovery = new DiscoveryService(jellyfin);
		expect(mockRecommendedServerDiscovery).toHaveBeenCalled();

		await discovery.getRecommendedServers(TEST_URLS);
		expect(getAddressCandidates).not.toHaveBeenCalled();

		const mockInstance = mockRecommendedServerDiscovery.mock.instances[1];
		expect(mockInstance.discover).toHaveBeenCalledWith(TEST_URLS, undefined);
		expect(mockInstance.discover).toHaveBeenCalledTimes(1);
	});

	it('should return a list of recommended candidates', async () => {
		const jellyfin = new Jellyfin({
			clientInfo: TEST_CLIENT,
			deviceInfo: TEST_DEVICE
		});
		const discovery = new DiscoveryService(jellyfin);
		expect(mockRecommendedServerDiscovery).toHaveBeenCalled();

		mockGetAddressCandidates.mockReturnValueOnce(TEST_URLS);
		await discovery.getRecommendedServerCandidates('example.com');
		expect(getAddressCandidates).toHaveBeenCalled();

		const mockInstance = mockRecommendedServerDiscovery.mock.instances[1];
		expect(mockInstance.discover).toHaveBeenCalledWith(TEST_URLS, undefined);
		expect(mockInstance.discover).toHaveBeenCalledTimes(1);
	});
});
