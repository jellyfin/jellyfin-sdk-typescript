/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Api } from '../../api.js';
import { EnvironmentApi } from '../../generated-client/api/environment-api.js';

export function getEnvironmentApi(api: Api): EnvironmentApi {
	return new EnvironmentApi(api.configuration, undefined, api.axiosInstance);
}
