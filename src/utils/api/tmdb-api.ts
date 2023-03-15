/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Api } from '../../api.js';
import { TmdbApi } from '../../generated-client/api/tmdb-api.js';

export function getTmdbApi(api: Api): TmdbApi {
	return new TmdbApi(api.configuration, undefined, api.axiosInstance);
}
