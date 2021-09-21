/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Jellyfin } from '..';
import { TEST_CLIENT, TEST_DEVICE } from '../__helpers__/common';
import { Discovery } from '../discovery';

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
