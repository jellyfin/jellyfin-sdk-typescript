/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import axios from 'axios';
import { vi, describe, expect, it, afterEach } from 'vitest';

import { Api, AUTHORIZATION_HEADER } from '..';
import { SERVER_URL, TEST_CLIENT, TEST_DEVICE } from '../__helpers__/common';
import { ImageType } from '../generated-client/models';
import { getAuthorizationHeader } from '../utils';

vi.mock('axios', async () => {
	const actual = await vi.importActual('axios');
	return {
		default: {
			getUri: actual.getUri,
			request: vi.fn()
		}
	}
})
const TEST_ACCESS_TOKEN = 'TEST-ACCESS-TOKEN';

/**
 * Api class tests.
 *
 * @group unit
 */
describe('Api', () => {
	afterEach(() => {
		vi.clearAllMocks();
	});

	it('should authenticate and update state', async () => {
		const USER_CREDENTIALS = {
			Username: 'test',
			Pw: ''
		};

		const requestSpy = vi.spyOn(axios, 'request');
		requestSpy.mockResolvedValueOnce({
			data: { AccessToken: TEST_ACCESS_TOKEN }
		});

		const api = new Api(SERVER_URL, TEST_CLIENT, TEST_DEVICE);
		await api.authenticateUserByName('test', '');

		expect(requestSpy).toHaveBeenCalledOnce();
		const requestData = requestSpy.mock.calls[0][0];
		expect(requestData.url).toEqual(`${SERVER_URL}/Users/AuthenticateByName`);
		expect(requestData.headers?.[AUTHORIZATION_HEADER]).toEqual(getAuthorizationHeader(TEST_CLIENT, TEST_DEVICE));
		expect(requestData.data).toEqual(JSON.stringify(USER_CREDENTIALS));

		expect(api.accessToken).toBe(TEST_ACCESS_TOKEN);
	});

	it('should logout and update state', async () => {
		const requestSpy = vi.spyOn(axios, 'request');
		const api = new Api(SERVER_URL, TEST_CLIENT, TEST_DEVICE, TEST_ACCESS_TOKEN);

		expect(api.accessToken).toBe(TEST_ACCESS_TOKEN);

		await api.logout();

		expect(requestSpy).toHaveBeenCalledOnce();
		const requestData = requestSpy.mock.calls[0][0];
		expect(requestData.url).toEqual(`${SERVER_URL}/Sessions/Logout`);

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
		vi.restoreAllMocks();
		const api = new Api(SERVER_URL, TEST_CLIENT, TEST_DEVICE);
		expect(api.getItemImageUrl('TEST')).toBe('https://example.com/Items/TEST/Images/Primary');
		expect(api.getItemImageUrl('TEST', ImageType.Backdrop, { fillWidth: 100, fillHeight: 100 }))
			.toBe('https://example.com/Items/TEST/Images/Backdrop?fillWidth=100&fillHeight=100');
	});
});
