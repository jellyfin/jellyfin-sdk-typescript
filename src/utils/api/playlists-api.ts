/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Api } from '../../api';
import { PlaylistsApi } from '../../generated-client/api/playlists-api';

export function getPlaylistsApi(api: Api): PlaylistsApi {
	return new PlaylistsApi(api.configuration, undefined, api.axiosInstance);
}
