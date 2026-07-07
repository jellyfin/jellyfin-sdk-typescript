/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { Api } from '../../api';
import { VideoApi } from '../../generated-client/api/video-api';

export function getVideoApi(api: Api): VideoApi {
	return new VideoApi(api.configuration, undefined, api.axiosInstance);
}
