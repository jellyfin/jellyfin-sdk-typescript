/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Api } from '../../api.js';
import { TimeSyncApi } from '../../generated-client/api/time-sync-api.js';

export function getTimeSyncApi(api: Api): TimeSyncApi {
	return new TimeSyncApi(api.configuration, undefined, api.axiosInstance);
}
