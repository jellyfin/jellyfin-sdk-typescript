/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import Url from 'url-parse';

/** The http protocol string. */
export const HTTP_PROTOCOL = 'http:';

/** The https protocol string. */
export const HTTPS_PROTOCOL = 'https:';

/** The default port for the http protocol. */
export const HTTP_PORT = 80;

/** The default port for the https protocol. */
export const HTTPS_PORT = 443;

/**
 * Copies a Url instance.
 * @param original The original Url.
 * @returns A copy of the original Url.
 */
export function copyUrl(original: Url): Url {
	return new Url(original.toString());
}

/**
 * Returns the default port number for a given protocol.
 * @param protocol The protocol string.
 * @returns The default port number of the protocol.
 */
export function getDefaultPort(protocol: string): number {
	if (protocol === HTTP_PROTOCOL) return HTTP_PORT;
	if (protocol === HTTPS_PROTOCOL) return HTTPS_PORT;
	throw new Error('Unsupported protocol');
}

/**
 * Parses a string to a Url object.
 * @param input A string representing a url.
 * @returns The Url object.
 */
export function parseUrl(input: string): Url {
	if (!input || !input.trim()) {
		throw new Error('Input is required');
	}

	let url = new Url(input);

	if (!url.protocol) {
		url.set('protocol', HTTP_PROTOCOL);
		// HACK: Not all properties of the url are being updated when the protocol
		// is set, so we need to re-parse it manually.
		url = copyUrl(url);
	}

	if (!url.hostname) {
		throw new Error(`Could not parse hostname for ${input}`);
	}

	return url;
}
