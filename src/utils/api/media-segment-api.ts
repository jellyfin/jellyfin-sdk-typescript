/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { Api } from '../../api';

import { MediaSegmentApi } from '../../generated-client/api/media-segment-api';

export function getMediaSegmentApi(api: Api): MediaSegmentApi {
	return new MediaSegmentApi(api.configuration, undefined, api.axiosInstance);
}
