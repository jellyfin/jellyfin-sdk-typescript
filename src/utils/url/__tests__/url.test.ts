/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { describe, it, expect } from 'vitest';

import { getDefaultPort, HTTP_PORT, HTTPS_PORT, HTTPS_PROTOCOL, HTTP_PROTOCOL, copyUrl, parseUrl, hasProtocolAndPort, isDefaultPort, buildWebSocketUrl } from '..';

/**
 * Url tests.
 *
 * @group unit/utils
 */
describe('Url', () => {
	describe('copyUrl()', () => {
		it('should return a copy', () => {
			const original = new URL('https://example.com');
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

	describe('hasProtocolAndPort()', () => {
		it('should return true if the protocol and port are specified', () => {
			const urlString = 'https://example.com:443';
			const url = parseUrl(urlString);
			expect(hasProtocolAndPort(urlString, url)).toBe(true);
		});

		it('should return false if the port is not specified', () => {
			const urlString = 'https://example.com';
			const url = parseUrl(urlString);
			expect(hasProtocolAndPort(urlString, url)).toBe(false);
		});

		it('should return false if the protocol is not specified', () => {
			const urlString = 'example.com:443';
			const url = parseUrl(urlString);
			expect(hasProtocolAndPort(urlString, url)).toBe(false);
		});
	});

	describe('isDefaultPort()', () => {
		it('should return true for default port', () => {
			let url = new URL('https://example.com');
			expect(isDefaultPort(url)).toBe(true);

			url.port = HTTPS_PORT.toString();
			expect(isDefaultPort(url)).toBe(true);

			url = new URL('http://example.com');
			url.port = HTTP_PORT.toString();
			expect(isDefaultPort(url)).toBe(true);
		});

		it('should return false for alternate ports', () => {
			const url = new URL('http://example.com:8888');
			expect(isDefaultPort(url)).toBe(false);
		});
	});

	describe('parseUrl()', () => {
		it('should parse a url string', () => {
			const url = parseUrl('https://example.com');
			expect(url).toBeInstanceOf(URL);
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

	describe('buildWebSocketUrl()', () => {
		it('should convert http to ws', () => {
			const url = buildWebSocketUrl('http://example.com');
			expect(url.protocol).toBe('ws:');
			expect(url.toString()).toBe('ws://example.com/');
		});

		it('should convert https to wss', () => {
			const url = buildWebSocketUrl('https://example.com');
			expect(url.protocol).toBe('wss:');
			expect(url.toString()).toBe('wss://example.com/');
		});

		it('should preserve port numbers', () => {
			const url = buildWebSocketUrl('http://example.com:8096');
			expect(url.protocol).toBe('ws:');
			expect(url.port).toBe('8096');
			expect(url.toString()).toBe('ws://example.com:8096/');
		});

		it('should preserve path and query parameters', () => {
			const url = buildWebSocketUrl('https://example.com/socket?accessToken=abc123');
			expect(url.protocol).toBe('wss:');
			expect(url.pathname).toBe('/socket');
			expect(url.search).toBe('?accessToken=abc123');
		});

		it('should return a URL instance', () => {
			const url = buildWebSocketUrl('http://example.com');
			expect(url).toBeInstanceOf(URL);
		});
	});
});
