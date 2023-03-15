/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Api } from '../../api.js';
import { MoviesApi } from '../../generated-client/api/movies-api.js';

export function getMoviesApi(api: Api): MoviesApi {
	return new MoviesApi(api.configuration, undefined, api.axiosInstance);
}
