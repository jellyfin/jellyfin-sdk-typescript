/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import normalizeUrl from '../normalize-url';

/**
 * Url normalizing tests.
 *
 * @group unit/utils
 */
describe('Normalize URLs', () => {
	it('should normalize URLs correctly', () => {
		expect(normalizeUrl('http://foobar/')).toBe('http://foobar/');
		expect(normalizeUrl('//foobar/')).toBe('http://foobar/');
		expect(normalizeUrl('foobar/')).toBe('http://foobar/');
		expect(normalizeUrl('foobar')).toBe('http://foobar/');

		// FIXME: Need more comprehensive tests
	});
});
