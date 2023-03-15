/**
 * MIT License
 *
 * Copyright (c) 2022 Jellyfin Contributors
 * Copyright (c) 2015 - 2022 Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
 * Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { HTTP_PROTOCOL } from './url.js';

/*
 * A fork of https://github.com/sindresorhus/normalize-url ported to typescript with all unneeded features removed.
 * This was necessary due to v7 only providing ES module builds that are poorly supported and v6 using poorly supported
 * regex features.
 */

export default function normalizeUrl(urlString: string): string {
	urlString = urlString.trim();

	// Data URL
	if (/^data:/i.test(urlString)) {
		throw new Error('data URLs are not supported');
	}

	if (/^view-source:/i.test(urlString)) {
		throw new Error('`view-source:` is not supported as it is a non-standard protocol');
	}

	const hasRelativeProtocol = urlString.startsWith('//');
	const isRelativeUrl = !hasRelativeProtocol && /^\.*\//.test(urlString);

	// Prepend protocol
	if (!isRelativeUrl) {
		urlString = urlString.replace(/^(?!(?:\w+:)?\/\/)|^\/\//, HTTP_PROTOCOL);
	}

	if (!/^https?:/i.test(urlString)) {
		throw new Error('only http or https protocols are supported');
	}

	const urlObject = new URL(urlString);

	// Remove hash
	urlObject.hash = '';

	// Remove duplicate slashes if not preceded by a protocol
	// NOTE: This could be implemented using a single negative lookbehind
	// regex, but we avoid that to maintain compatibility with older js engines
	// which do not have support for that feature.
	if (urlObject.pathname) {
		// TODO: Replace everything below with `urlObject.pathname = urlObject.pathname.replace(/(?<!\b[a-z][a-z\d+\-.]{1,50}:)\/{2,}/g, '/');` when Safari supports negative lookbehind.

		// Split the string by occurrences of this protocol regex, and perform
		// duplicate-slash replacement on the strings between those occurrences
		// (if any).
		const protocolRegex = /\b[a-z][a-z\d+\-.]{1,50}:\/\//g;

		let lastIndex = 0;
		let result = '';
		for (;;) {
			const match = protocolRegex.exec(urlObject.pathname);
			if (!match) {
				break;
			}

			const protocol = match[0];
			const protocolAtIndex = match.index;
			const intermediate = urlObject.pathname.slice(lastIndex, protocolAtIndex);

			result += intermediate.replace(/\/{2,}/g, '/');
			result += protocol;
			lastIndex = protocolAtIndex + protocol.length;
		}

		const remnant = urlObject.pathname.slice(lastIndex, urlObject.pathname.length);
		result += remnant.replace(/\/{2,}/g, '/');

		urlObject.pathname = result;
	}

	// Decode URI octets
	if (urlObject.pathname) {
		try {
			urlObject.pathname = decodeURI(urlObject.pathname);
		} catch { /* swallow errors */ }
	}

	if (urlObject.hostname) {
		// Remove trailing dot
		urlObject.hostname = urlObject.hostname.replace(/\.$/, '');
	}

	// Remove query parameters
	urlObject.search = '';

	// Remove a trailing slash
	urlObject.pathname = urlObject.pathname.replace(/\/$/, '');

	// Take advantage of many of the WHATWG URL normalizations
	urlString = urlObject.toString();

	return urlString;
}
