/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { AxiosResponse, RawAxiosRequestConfig } from 'axios';

import type { Api } from '../../api';
import type { AuthenticationApiAuthenticateUserByNameRequest, AuthenticationApiAuthenticateWithQuickConnectRequest } from '../../generated-client/api/authentication-api';
import { AuthenticationApi } from '../../generated-client/api/authentication-api';
import type { AuthenticationResult } from '../../generated-client/models/authentication-result';

/** An augmented AuthenticationApi that updates the state of the access token in the Api instance. */
class AugmentedAuthenticationApi extends AuthenticationApi {
	api: Api;

	constructor(api: Api) {
		super(api.configuration, undefined, api.axiosInstance);
		this.api = api;
	}

	public authenticateUserByName(
		requestParameters: AuthenticationApiAuthenticateUserByNameRequest,
		options?: RawAxiosRequestConfig
		// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-empty-object-type
	): Promise<AxiosResponse<AuthenticationResult, any, {}>> {
		return super.authenticateUserByName(requestParameters, options).then((response) => {
			this.api.update({ accessToken: response.data.AccessToken || '' });
			return response;
		});
	}

	public authenticateWithQuickConnect(
		requestParameters: AuthenticationApiAuthenticateWithQuickConnectRequest,
		options?: RawAxiosRequestConfig
		// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-empty-object-type
	): Promise<AxiosResponse<AuthenticationResult, any, {}>> {
		return super.authenticateWithQuickConnect(requestParameters, options).then((response) => {
			this.api.update({ accessToken: response.data.AccessToken || '' });
			return response;
		});
	}
}

export function getAuthenticationApi(api: Api): AuthenticationApi {
	return new AugmentedAuthenticationApi(api);
}
