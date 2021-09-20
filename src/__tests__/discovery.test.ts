/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Jellyfin } from '..';
import { Discovery } from '../discovery';

const TEST_CLIENT = {
	name: 'sdk-test-client',
	version: '0.0.0'
};

const TEST_DEVICE = {
	name: 'device-name',
	id: 'device-id'
};
describe('Discovery', () => {
	it('should return a list of candidates', () => {
		const jellyfin = new Jellyfin({
			clientInfo: TEST_CLIENT,
			deviceInfo: TEST_DEVICE
		});
		const discovery = new Discovery(jellyfin);

		const candidates = discovery.getAddressCandidates('example.com');
		expect(candidates).toHaveLength(5);
	});
});
