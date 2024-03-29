/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { Api } from '../../api';
import { MusicGenresApi } from '../../generated-client/api/music-genres-api';

export function getMusicGenresApi(api: Api): MusicGenresApi {
	return new MusicGenresApi(api.configuration, undefined, api.axiosInstance);
}
