/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { getAddressCandidates } from '..';

describe('Address Candidates', () => {
	describe('getAddressCandidates()', () => {
		it('should return candidates for a given domain', () => {
			const candidates = getAddressCandidates('example.com');
			expect(candidates).toHaveLength(5);
			expect(candidates[0]).toEqual('http://example.com/');
			expect(candidates[1]).toEqual('https://example.com/');
			expect(candidates[2]).toEqual('http://example.com:8096/');
			expect(candidates[3]).toEqual('https://example.com:8096/');
			expect(candidates[4]).toEqual('https://example.com:8920/');
		});

		it('should return candidates for an https url', () => {
			const candidates = getAddressCandidates('https://example.com');
			expect(candidates).toHaveLength(3);
			expect(candidates[0]).toEqual('https://example.com/');
			expect(candidates[1]).toEqual('https://example.com:8096/');
			expect(candidates[2]).toEqual('https://example.com:8920/');
		});

		it('should use the specified port when provided', () => {
			const candidates = getAddressCandidates('http://example.com:8888');
			expect(candidates).toHaveLength(2);
			expect(candidates[0]).toEqual('http://example.com:8888/');
			expect(candidates[1]).toEqual('https://example.com:8888/');
		});

		it('should return the entered url non http(s) protocols', () => {
			const candidates = getAddressCandidates('ftp://example.com');
			expect(candidates).toHaveLength(1);
			expect(candidates[0]).toEqual('ftp://example.com/');
		});

		it('should return an empty list for invalid urls', () => {
			const candidates = getAddressCandidates('/');
			expect(candidates).toHaveLength(0);
		});
	});
});
