/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Api } from '../../api.js';
import { SubtitleApi } from '../../generated-client/api/subtitle-api.js';

export function getSubtitleApi(api: Api): SubtitleApi {
	return new SubtitleApi(api.configuration, undefined, api.axiosInstance);
}
