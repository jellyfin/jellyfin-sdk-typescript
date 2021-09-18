/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import Url from 'url-parse';

import { getDefaultPort, HTTP_PORT, HTTPS_PORT, HTTPS_PROTOCOL, HTTP_PROTOCOL, copyUrl, parseUrl } from '..';

describe('Url', () => {
	describe('copyUrl()', () => {
		it('should return a copy', () => {
			const original = new Url('https://example.com');
			const copy = copyUrl(original);

			expect(copy).not.toBe(original);
			expect(copy).toEqual(original);
		});
	});

	describe('getDefaultPort()', () => {
		it('should return 80 for http', () => {
			expect(getDefaultPort(HTTP_PROTOCOL)).toEqual(HTTP_PORT);
		});

		it('should return 443 for https', () => {
			expect(getDefaultPort(HTTPS_PROTOCOL)).toEqual(HTTPS_PORT);
		});

		it('should throw for unknown protocols', () => {
			expect(() => {
				getDefaultPort('FOO');
			}).toThrow();
		});
	});

	describe('parseUrl()', () => {
		it('should parse a url string', () => {
			const url = parseUrl('https://example.com');
			expect(url).toBeInstanceOf(Url);
			expect(url.toString()).toBe('https://example.com/');
		});

		it('should throw when passed an empty string', () => {
			expect(() => {
				parseUrl('');
			}).toThrow();
			expect(() => {
				parseUrl('   ');
			}).toThrow();
		});

		it('should add the http protocol when missing', () => {
			const url = parseUrl('example.com');
			expect(url.protocol).toBe(HTTP_PROTOCOL);
			expect(url.toString()).toBe('http://example.com/');
		});

		it('should throw when passed an invalid url', () => {
			expect(() => {
				parseUrl('/');
			}).toThrow();
		});
	});
});
