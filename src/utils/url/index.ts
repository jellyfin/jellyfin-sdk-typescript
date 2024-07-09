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
 * Checks if the URL string specifies the protocol and port.
 * @param urlString The URL string to test.
 * @param url The parsed URL object.
 * @returns True if the the URL string includes the protocol and port.
 */
export function hasProtocolAndPort(urlString: string, url: URL): boolean {
	// The parsed URL object drops the default port
	const port = url.port || getDefaultPort(url.protocol);
	return urlString
		.toLowerCase()
		.startsWith(`${url.protocol}//${url.hostname.toLowerCase()}:${port}`);
}

/**
 * Checks if the URL is using the protocol's default port.
 * @param url The URL object to check.
 * @returns True if the URL port is the protocol default.
 */
export function isDefaultPort(url: URL): boolean {
	return !url.port
		|| (url.port === getDefaultPort(url.protocol).toString());
}

/**
 * Parses a string to a URL object.
 * @param input A string representing a URL.
 * @returns The URL object.
 */
export function parseUrl(input: string): URL {
	if (!input?.trim()) {
		throw new Error('Input is required');
	}

	return new URL(
		normalizeUrl(input)
	);
}
