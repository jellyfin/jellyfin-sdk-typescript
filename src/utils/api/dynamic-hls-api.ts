/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { Api } from '../../api';
import { DynamicHlsApi } from '../../generated-client/api/dynamic-hls-api';

export function getDynamicHlsApi(api: Api): DynamicHlsApi {
	return new DynamicHlsApi(api.configuration, undefined, api.axiosInstance);
}
