/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { Api } from '../../api';
import { TvShowsApi } from '../../generated-client/api/tv-shows-api';

export function getTvShowsApi(api: Api): TvShowsApi {
	return new TvShowsApi(api.configuration, undefined, api.axiosInstance);
}
