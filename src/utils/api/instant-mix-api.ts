/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Api } from '../../api.js';
import { InstantMixApi } from '../../generated-client/api/instant-mix-api.js';

export function getInstantMixApi(api: Api): InstantMixApi {
	return new InstantMixApi(api.configuration, undefined, api.axiosInstance);
}
