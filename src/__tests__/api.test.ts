/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import axios from 'axios';

import { Api, AUTHORIZATION_HEADER } from '..';
import { SERVER_URL, TEST_CLIENT, TEST_DEVICE } from '../__helpers__/common';
import { ImageType } from '../generated-client/models';
import { getAuthorizationHeader } from '../utils';

jest.mock('axios', () => ({
	...jest.requireActual('axios'),
	request: jest.fn()
}));
const mockAxios = jest.mocked(axios, true);

const TEST_ACCESS_TOKEN = 'TEST-ACCESS-TOKEN';

/**
 * Api class tests.
 *
 * @group unit
 */
describe('Api', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should authenticate and update state', async () => {
		const USER_CREDENTIALS = {
			Username: 'test',
			Pw: ''
		};

		mockAxios.request.mockResolvedValueOnce({
			data: { AccessToken: TEST_ACCESS_TOKEN }
		});

		const api = new Api(SERVER_URL, TEST_CLIENT, TEST_DEVICE);
		await api.authenticateUserByName('test', '');

		expect(mockAxios.request.mock.calls).toHaveLength(1);

		const requestData = mockAxios.request.mock.calls[0][0];
		expect(requestData.url).toBe(`${SERVER_URL}/Users/AuthenticateByName`);
		expect(requestData.headers?.[AUTHORIZATION_HEADER]).toBe(getAuthorizationHeader(TEST_CLIENT, TEST_DEVICE));
		expect(requestData.data).toBe(JSON.stringify(USER_CREDENTIALS));

		expect(api.accessToken).toBe(TEST_ACCESS_TOKEN);
	});

	it('should logout and update state', async () => {
		const api = new Api(SERVER_URL, TEST_CLIENT, TEST_DEVICE, TEST_ACCESS_TOKEN);

		expect(api.accessToken).toBe(TEST_ACCESS_TOKEN);

		await api.logout();

		expect(mockAxios.request.mock.calls).toHaveLength(1);

		const requestData = mockAxios.request.mock.calls[0][0];
		expect(requestData.url).toBe(`${SERVER_URL}/Sessions/Logout`);

		expect(api.accessToken).toBe('');
	});

	it('should return the correct authorization header value', () => {
		const api = new Api(SERVER_URL, TEST_CLIENT, TEST_DEVICE);
		expect(api.authorizationHeader).toBe(getAuthorizationHeader(TEST_CLIENT, TEST_DEVICE));
	});

	it('should return the correct basePath value', () => {
		const api = new Api(SERVER_URL, TEST_CLIENT, TEST_DEVICE);
		expect(api.basePath).toBe(SERVER_URL);
	});

	it('should return an item image url', () => {
		const api = new Api(SERVER_URL, TEST_CLIENT, TEST_DEVICE);
		expect(api.getItemImageUrl('TEST')).toBe('https://example.com/Items/TEST/Images/Primary');
		expect(api.getItemImageUrl('TEST', ImageType.Backdrop, { fillWidth: 100, fillHeight: 100 }))
			.toBe('https://example.com/Items/TEST/Images/Backdrop?fillWidth=100&fillHeight=100');
	});
});
