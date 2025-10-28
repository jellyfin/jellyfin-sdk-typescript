/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { RawAxiosRequestConfig, AxiosResponse } from 'axios';

import type { Api } from '../../api';
import type { UserApiAuthenticateUserByNameRequest, UserApiAuthenticateWithQuickConnectRequest } from '../../generated-client/api/user-api';
import { UserApi } from '../../generated-client/api/user-api';
import type { AuthenticationResult } from '../../generated-client/models/authentication-result';

/** An augmented UserApi that updates the state of the access token in the Api instance. */
class AugmentedUserApi extends UserApi {
	api: Api;

	constructor(api: Api) {
		super(api.configuration, undefined, api.axiosInstance);
		this.api = api;
	}

	public authenticateUserByName(
		requestParameters: UserApiAuthenticateUserByNameRequest,
		options?: RawAxiosRequestConfig
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-empty-object-type
	): Promise<AxiosResponse<AuthenticationResult, any, {}>> {
		return super.authenticateUserByName(requestParameters, options)
			.then(response => {
				this.api.accessToken = response.data.AccessToken || '';
				return response;
			});
	}

	public authenticateWithQuickConnect(
		requestParameters: UserApiAuthenticateWithQuickConnectRequest,
		options?: RawAxiosRequestConfig
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-empty-object-type
	): Promise<AxiosResponse<AuthenticationResult, any, {}>> {
		return super.authenticateWithQuickConnect(requestParameters, options)
			.then(response => {
				this.api.accessToken = response.data.AccessToken || '';
				return response;
			});
	}
}

export function getUserApi(api: Api): UserApi {
	return new AugmentedUserApi(api);
}
