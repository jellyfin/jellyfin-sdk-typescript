/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { getAuthorizationHeader } from '..';

describe('Authentication', () => {
	it('should return the correct header value without token', () => {
		const header = getAuthorizationHeader({
			name: 'SDK Test',
			version: '0.0.0'
		}, {
			name: 'Test Device',
			id: 'TESTID'
		});
		expect(header).toEqual('MediaBrowser Client="SDK Test", Device="Test Device", DeviceId="TESTID", Version="0.0.0", Token=""');
	});

	it('should return the correct header value with token', () => {
		const header = getAuthorizationHeader({
			name: 'SDK Test',
			version: '0.0.0'
		}, {
			name: 'Test Device',
			id: 'TESTID'
		}, 'TESTTOKEN');
		expect(header).toEqual('MediaBrowser Client="SDK Test", Device="Test Device", DeviceId="TESTID", Version="0.0.0", Token="TESTTOKEN"');
	});
});
