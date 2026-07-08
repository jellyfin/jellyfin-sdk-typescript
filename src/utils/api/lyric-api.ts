/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { Api } from '../../api';
import { LyricApi } from '../../generated-client/api/lyric-api';

export function getLyricApi(api: Api): LyricApi {
	return new LyricApi(api.configuration, undefined, api.axiosInstance);
}
