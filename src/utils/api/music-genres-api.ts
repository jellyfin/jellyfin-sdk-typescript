/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Api } from '../../api.js';
import { MusicGenresApi } from '../../generated-client/api/music-genres-api.js';

export function getMusicGenresApi(api: Api): MusicGenresApi {
	return new MusicGenresApi(api.configuration, undefined, api.axiosInstance);
}
