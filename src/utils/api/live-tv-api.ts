/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Api } from '../../api.js';
import { LiveTvApi } from '../../generated-client/api/live-tv-api.js';

export function getLiveTvApi(api: Api): LiveTvApi {
	return new LiveTvApi(api.configuration, undefined, api.axiosInstance);
}
