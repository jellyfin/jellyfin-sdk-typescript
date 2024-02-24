/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { describe, it, expect } from 'vitest';

import { getAuthorizationHeader } from '..';
import { TEST_CLIENT, TEST_DEVICE } from '../../__helpers__/common';

/**
 * Authentication tests.
 *
 * @group unit/utils
 */
describe('Authentication', () => {
	it('should return the correct header value without token', () => {
		const header = getAuthorizationHeader(TEST_CLIENT, TEST_DEVICE);
		expect(header).toBe('MediaBrowser Client="sdk-test-client", Device="device-name", DeviceId="device-id", Version="0.0.0", Token=""');
	});

	it('should return the correct header value with token', () => {
		const header = getAuthorizationHeader(TEST_CLIENT, TEST_DEVICE, 'TESTTOKEN');
		expect(header).toBe('MediaBrowser Client="sdk-test-client", Device="device-name", DeviceId="device-id", Version="0.0.0", Token="TESTTOKEN"');
	});
});
