/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { isVersionLess } from '..';

/**
 * Versioning tests
 *
 * @group unit/utils
 */
describe('Versioning checks', () => {
	it("doesn't allow versions with negative numbers", () => {
		expect(() => isVersionLess('-10.5.3', '10.8.-9')).toThrow(TypeError);
	});
	it("doesn't allow versions with non-numeric characters", () => {
		expect(() => isVersionLess('10.2.7-beta', '15.8.9')).toThrow(TypeError);
	});
	/**
     * Equal
     */
	it('false on equal version: 0.0.0', () => {
		expect(isVersionLess('0.0.0', '0.0.0')).toBe(false);
	});
	it('false on equal version: 0.0.5', () => {
		expect(isVersionLess('0.0.5', '0.0.5')).toBe(false);
	});
	it('false on equal version: 0.5.0', () => {
		expect(isVersionLess('0.5.0', '0.5.0')).toBe(false);
	});
	it('false on equal version: 5.0.0', () => {
		expect(isVersionLess('5.0.0', '5.0.0')).toBe(false);
	});
	it('false on equal version: 10.8.9', () => {
		expect(isVersionLess('10.8.9', '10.8.9')).toBe(false);
	});
	/**
     * Greater
     */
	it('1.0.0 is greater than 0.0.7', () => {
		expect(isVersionLess('1.0.0', '0.0.7')).toBe(false);
	});
	it('1.0.0 is greater than 0.5.0', () => {
		expect(isVersionLess('1.0.0', '0.5.0')).toBe(false);
	});
	it('1.0.0 is greater than 0.5.7', () => {
		expect(isVersionLess('1.0.0', '0.5.7')).toBe(false);
	});
	it('2.0.0 is greater than 1.0.0', () => {
		expect(isVersionLess('2.0.0', '1.0.0')).toBe(false);
	});
	it('0.5.0 is greater than 0.0.7', () => {
		expect(isVersionLess('0.5.0', '0.0.7')).toBe(false);
	});
	it('0.5.7 is greater than 0.0.7', () => {
		expect(isVersionLess('0.5.7', '0.0.7')).toBe(false);
	});
	it('2-digit versions: 12.25.34 is greater than 12.17.89', () => {
		expect(isVersionLess('12.25.34', '12.17.89')).toBe(false);
	});
	/**
     * Less
     */
	it('0.0.7 is less than 1.0.0', () => {
		expect(isVersionLess('0.0.7', '1.0.0')).toBe(true);
	});
	it('0.5.0 is less than 1.0.0', () => {
		expect(isVersionLess('0.5.0', '1.0.0')).toBe(true);
	});
	it('0.5.7 is less than 1.0.0', () => {
		expect(isVersionLess('0.5.7', '1.0.0')).toBe(true);
	});
	it('1.0.0 is less than 2.0.0', () => {
		expect(isVersionLess('1.0.0', '2.0.0')).toBe(true);
	});
	it('0.0.7 is less than 0.5.0', () => {
		expect(isVersionLess('0.0.7', '0.5.0')).toBe(true);
	});
	it('0.0.7 is less than 0.5.7', () => {
		expect(isVersionLess('0.0.7', '0.5.7')).toBe(true);
	});
	it('2-digit versions: 12.17.89 is less than 12.25.34', () => {
		expect(isVersionLess('12.17.89', '12.25.34')).toBe(true);
	});
});
