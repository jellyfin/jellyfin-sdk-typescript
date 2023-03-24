/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { Api } from '../../api';
import { DlnaApi } from '../../generated-client/api/dlna-api';

export function getDlnaApi(api: Api): DlnaApi {
	return new DlnaApi(api.configuration, undefined, api.axiosInstance);
}
