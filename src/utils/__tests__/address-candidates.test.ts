/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { describe, it, expect } from 'vitest';

import { getAddressCandidates } from '..';

/**
 * Address Candidates tests.
 *
 * @group unit/utils
 */
describe('Address Candidates', () => {
	describe('getAddressCandidates()', () => {
		it('should return candidates for a given domain', () => {
			const candidates = getAddressCandidates('example.com');
			expect(candidates).toHaveLength(5);
			expect(candidates[0]).toBe('https://example.com/');
			expect(candidates[1]).toBe('https://example.com:8096/');
			expect(candidates[2]).toBe('https://example.com:8920/');
			expect(candidates[3]).toBe('http://example.com/');
			expect(candidates[4]).toBe('http://example.com:8096/');
		});

		it('should return candidates for an https url', () => {
			const candidates = getAddressCandidates('https://example.com');
			expect(candidates).toHaveLength(3);
			expect(candidates[0]).toBe('https://example.com/');
			expect(candidates[1]).toBe('https://example.com:8096/');
			expect(candidates[2]).toBe('https://example.com:8920/');
		});

		it('should use the specified port when provided', () => {
			const candidates = getAddressCandidates('http://example.com:8888');
			expect(candidates).toHaveLength(2);
			expect(candidates[0]).toBe('https://example.com:8888/');
			expect(candidates[1]).toBe('http://example.com:8888/');
		});

		it('should return an empty list for urls with non http(s) protocols', () => {
			const candidates = getAddressCandidates('ftp://example.com');
			expect(candidates).toHaveLength(0);
		});

		it('should return an empty list for invalid urls', () => {
			const candidates = getAddressCandidates('/');
			expect(candidates).toHaveLength(0);
		});
	});
});
