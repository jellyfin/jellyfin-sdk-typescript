/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { Api } from '../../api';
import { ApiKeyApi } from '../../generated-client/api/api-key-api';

export function getApiKeyApi(api: Api): ApiKeyApi {
	return new ApiKeyApi(api.configuration, undefined, api.axiosInstance);
}
