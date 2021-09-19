/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import Url from 'url-parse';

import { HTTP_PROTOCOL, HTTPS_PROTOCOL, parseUrl, copyUrl, getDefaultPort } from './url';

/** The default http port for Jellyfin servers. */
export const JF_HTTP_PORT = 8096;

/** The default https port for Jellyfin servers. */
export const JF_HTTPS_PORT = 8920;

/**
 * Gets a list of address candidates as Url objects
 * from a provided url address string.
 * @param input A server url address string.
 * @returns A list of potential server Url objects.
 */
export function getAddressCandidates(input: string): Array<Url> {
	const candidates: Array<Url> = [];

	try {
		const url = parseUrl(input);
		candidates.push(url);

		if (url.protocol === HTTP_PROTOCOL) {
			candidates.push(
				copyUrl(url)
					.set('protocol', HTTPS_PROTOCOL)
			);
		}

		candidates
			.filter(val => !val.port || val.port === getDefaultPort(val.protocol).toString())
			.forEach(val => {
				if (val.protocol === HTTP_PROTOCOL) {
					candidates.push(
						copyUrl(val)
							.set('port', JF_HTTP_PORT.toString())
					);
				} else if (val.protocol === HTTPS_PROTOCOL) {
					candidates.push(
						copyUrl(val)
							.set('port', JF_HTTP_PORT.toString())
					);
					candidates.push(
						copyUrl(val)
							.set('port', JF_HTTPS_PORT.toString())
					);
				}
			});

		return candidates;
	} catch (err) {
		console.warn(err);
		return [];
	}
}
