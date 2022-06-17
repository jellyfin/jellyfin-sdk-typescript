/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Api } from '../../api';
import { SyncPlayApi } from '../../generated-client/api/sync-play-api';

export function getSyncPlayApi(api: Api): SyncPlayApi {
	return new SyncPlayApi(api.configuration, undefined, api.axiosInstance);
}
