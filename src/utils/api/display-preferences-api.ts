/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { Api } from '../../api';
import { DisplayPreferencesApi } from '../../generated-client/api/display-preferences-api';

export function getDisplayPreferencesApi(api: Api): DisplayPreferencesApi {
	return new DisplayPreferencesApi(api.configuration, undefined, api.axiosInstance);
}
