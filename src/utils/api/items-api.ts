/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { Api } from '../../api';
import { ItemsApi } from '../../generated-client/api/items-api';

export function getItemsApi(api: Api): ItemsApi {
	return new ItemsApi(api.configuration, undefined, api.axiosInstance);
}
