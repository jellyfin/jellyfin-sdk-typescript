/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { Api } from '../../api';
import { TrailerApi } from '../../generated-client/api/trailer-api';

export function getTrailerApi(api: Api): TrailerApi {
	return new TrailerApi(api.configuration, undefined, api.axiosInstance);
}
