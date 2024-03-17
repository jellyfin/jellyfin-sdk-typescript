/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { describe, it, expect } from 'vitest';

import { ItemSortBy } from '../index';

/**
 * Api model tests.
 * NOTE: This is a really dumb case where because of the way TypeScript enums are generated in JavaScript we need to
 * interact with the enum in a test (either directly or indirectly) for the file to be considered covered.
 *
 * @group unit/models/api
 */
describe('ItemSortBy', () => {
	it('should exist', () => {
		expect(ItemSortBy).toBeDefined();
	});
});
