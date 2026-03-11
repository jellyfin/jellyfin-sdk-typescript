/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { Api } from '../../api';
import { AUTHORIZATION_PARAMETER } from '../../constants';
import { LibraryApi, type LibraryApiGetDownloadRequest } from '../../generated-client/api/library-api';

/** An augmented LibraryApi with URL helpers. */
class AugmentedLibraryApi extends LibraryApi {
	api: Api;

	constructor(api: Api) {
		super(api.configuration, undefined, api.axiosInstance);
		this.api = api;
	}

	/**
	 * Get an Item download URL.
	 * @param requestParameters The download request parameters.
	 * @returns The Item download URL.
	 */
	public getDownloadUrl(requestParameters: LibraryApiGetDownloadRequest): string {
		return this.api.getUri(
			`/Items/${requestParameters.itemId}/Download`,
			{ [AUTHORIZATION_PARAMETER]: this.api.accessToken }
		);
	}
}

export function getLibraryApi(api: Api): AugmentedLibraryApi {
	return new AugmentedLibraryApi(api);
}
