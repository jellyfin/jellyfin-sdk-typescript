/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { getAddressCandidates } from '..';

describe('Address Candidates', () => {
	describe('getAddressCandidates()', () => {
		it('should return candidates for a given domain', () => {
			const candidates = getAddressCandidates('demo.jellyfin.org');
			expect(candidates).toHaveLength(5);
			expect(candidates[0].toString()).toEqual('http://demo.jellyfin.org/');
			expect(candidates[1].toString()).toEqual('https://demo.jellyfin.org/');
			expect(candidates[2].toString()).toEqual('http://demo.jellyfin.org:8096/');
			expect(candidates[3].toString()).toEqual('https://demo.jellyfin.org:8096/');
			expect(candidates[4].toString()).toEqual('https://demo.jellyfin.org:8920/');
		});

		it('should return candidates for an https url', () => {
			const candidates = getAddressCandidates('https://demo.jellyfin.org');
			expect(candidates).toHaveLength(3);
			expect(candidates[0].toString()).toEqual('https://demo.jellyfin.org/');
			expect(candidates[1].toString()).toEqual('https://demo.jellyfin.org:8096/');
			expect(candidates[2].toString()).toEqual('https://demo.jellyfin.org:8920/');
		});
	});
});
