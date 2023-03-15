/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Api } from '../../api.js';
import { MediaInfoApi } from '../../generated-client/api/media-info-api.js';

export function getMediaInfoApi(api: Api): MediaInfoApi {
	return new MediaInfoApi(api.configuration, undefined, api.axiosInstance);
}
