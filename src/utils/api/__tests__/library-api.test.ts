/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { describe, expect, it } from 'vitest';

import { SERVER_URL, TEST_CLIENT, TEST_DEVICE } from '../../../__helpers__/common';
import { Api } from '../../../api';
import { AUTHORIZATION_PARAMETER } from '../../../constants';
import { getLibraryApi } from '../library-api';

describe('LibraryApi', () => {
	it('should return a download URL', () => {
		const api = new Api(SERVER_URL, TEST_CLIENT, TEST_DEVICE);
		const libraryApi = getLibraryApi(api);
		expect(libraryApi.getDownloadUrl({ itemId: '123456' }))
			.toBe(`${SERVER_URL}/Items/123456/Download?${AUTHORIZATION_PARAMETER}=`);
	});
});
