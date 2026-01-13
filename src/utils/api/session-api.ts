/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { RawAxiosRequestConfig, AxiosResponse } from 'axios';

import type { Api } from '../../api';
import { SessionApi } from '../../generated-client/api/session-api';

/** An augmented SessionApi that updates the state of the access token in the Api instance. */
class AugmentedSessionApi extends SessionApi {
	api: Api;

	constructor(api: Api) {
		super(api.configuration, undefined, api.axiosInstance);
		this.api = api;
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-empty-object-type
	public reportSessionEnded(options?: RawAxiosRequestConfig): Promise<AxiosResponse<void, any, {}>> {
		return super.reportSessionEnded(options)
			.then(response => {
				this.api.update({
					accessToken: ''
				});
				return response;
			});
	}
}

export function getSessionApi(api: Api): SessionApi {
	return new AugmentedSessionApi(api);
}
