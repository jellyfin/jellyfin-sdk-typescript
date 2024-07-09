/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { HTTP_PORT, HTTP_PROTOCOL, HTTPS_PORT, HTTPS_PROTOCOL } from './constants';
import normalizeUrl from './normalize-url';

/** Common URL constant values. */
export * from './constants';

/**
 * Copies a URL instance.
 * @param original The original URL.
 * @returns A copy of the original URL.
 */
export function copyUrl(original: URL): URL {
	return new URL(original.toString());
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
 * Checks if the url string specifies the protocol and port.
 * @param urlString The url string to test.
 * @param url The parsed url object.
 * @returns True if the the url string includes the protocol and port.
 */
export function hasProtocolAndPort(urlString: string, url: URL): boolean {
	// The parsed URL object drops the default port
	const port = url.port || getDefaultPort(url.protocol);
	return urlString
		.toLowerCase()
		.startsWith(`${url.protocol}//${url.hostname.toLowerCase()}:${port}`);
}

/**
 * Parses a string to a Url object.
 * @param input A string representing a url.
 * @returns The Url object.
 */
export function parseUrl(input: string): URL {
	if (!input?.trim()) {
		throw new Error('Input is required');
	}

	return new URL(
		normalizeUrl(input)
	);
}
