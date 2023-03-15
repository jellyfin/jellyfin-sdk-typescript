/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Api } from '../../api.js';
import { ChannelsApi } from '../../generated-client/api/channels-api.js';

export function getChannelsApi(api: Api): ChannelsApi {
	return new ChannelsApi(api.configuration, undefined, api.axiosInstance);
}
