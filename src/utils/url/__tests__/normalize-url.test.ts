/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { describe, it, expect } from 'vitest';

import normalizeUrl from '../normalize-url';

/**
 * Url normalizing tests.
 *
 * @group unit/utils
 */
describe('Normalize URLs', () => {
	it('should normalize URLs correctly', () => {
		expect(normalizeUrl('http://example.com/')).toBe('http://example.com/');
		expect(normalizeUrl('http://example.com')).toBe('http://example.com/');
		expect(normalizeUrl('https://example.com/')).toBe('https://example.com/');
		expect(normalizeUrl('http://example.com/foo/bar/')).toBe('http://example.com/foo/bar');

		// Don't reduce double slashes if part of a protocol
		expect(normalizeUrl('https://example.com/https://jellyfin.org')).toBe('https://example.com/https://jellyfin.org');
		expect(normalizeUrl('https://example.com/https://jellyfin.org/foo//bar')).toBe('https://example.com/https://jellyfin.org/foo/bar');
		expect(normalizeUrl('https://example.com/http://jellyfin.org')).toBe('https://example.com/http://jellyfin.org');
		expect(normalizeUrl('https://example.com/http://jellyfin.org/foo//bar')).toBe('https://example.com/http://jellyfin.org/foo/bar');

		// Strip trailing dots in domain names
		expect(normalizeUrl('http://example.com./')).toBe('http://example.com/');

		// Strip hashes from URLs
		expect(normalizeUrl('http://example.com/#/hash/path')).toBe('http://example.com/');
	});

	it('should default to using http protocol when not specified', () => {
		expect(normalizeUrl('//example.com/')).toBe('http://example.com/');
		expect(normalizeUrl('example.com/')).toBe('http://example.com/');
		expect(normalizeUrl('example.com')).toBe('http://example.com/');
	});

	it('should throw for non http(s) protocols', () => {
		expect(() => {
			normalizeUrl('data:ASDF');
		}).toThrow('data URLs are not supported');

		expect(() => {
			normalizeUrl('view-source:example.com');
		}).toThrow('`view-source:` is not supported as it is a non-standard protocol');

		expect(() => {
			normalizeUrl('ftp://example.com');
		}).toThrow('only http or https protocols are supported');
	});
});
