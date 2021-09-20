/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { getAddressCandidates } from './utils';

import { Jellyfin } from '.';

export class Discovery {
	private jellyfin;

	constructor(jellyfin: Jellyfin) {
		this.jellyfin = jellyfin;
	}

	/**
	 * Gets a list of address candidates url strings
	 * from a provided url address string.
	 * @param input A server url address string.
	 * @returns A list of potential server addresses.
	 */
	getAddressCandidates(input: string): Array<string> {
		return getAddressCandidates(input);
	}
}
