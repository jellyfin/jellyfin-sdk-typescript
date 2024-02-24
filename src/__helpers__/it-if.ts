/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import type { TestFunction } from 'vitest';
import { test } from 'vitest';

export function itIf(condition: boolean, ...args: [string, TestFunction?, number?]): void {
	return condition ? test(...args) : test.skip(...args);
}
