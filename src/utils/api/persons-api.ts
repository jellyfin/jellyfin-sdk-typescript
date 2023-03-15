/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Api } from '../../api.js';
import { PersonsApi } from '../../generated-client/api/persons-api.js';

export function getPersonsApi(api: Api): PersonsApi {
	return new PersonsApi(api.configuration, undefined, api.axiosInstance);
}
