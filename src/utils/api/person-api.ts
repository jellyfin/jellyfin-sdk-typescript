/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { Api } from '../../api';
import { PersonApi } from '../../generated-client/api/person-api';

export function getPersonApi(api: Api): PersonApi {
	return new PersonApi(api.configuration, undefined, api.axiosInstance);
}
