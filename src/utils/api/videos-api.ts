/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { Api } from '../../api';
import { VideosApi } from '../../generated-client/api/videos-api';

export function getVideosApi(api: Api): VideosApi {
	return new VideosApi(api.configuration, undefined, api.axiosInstance);
}
