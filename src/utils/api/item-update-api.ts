/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Api } from '../../api.js';
import { ItemUpdateApi } from '../../generated-client/api/item-update-api.js';

export function getItemUpdateApi(api: Api): ItemUpdateApi {
	return new ItemUpdateApi(api.configuration, undefined, api.axiosInstance);
}
