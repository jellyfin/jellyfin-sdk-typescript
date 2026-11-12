/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

export class PeriodicListenerInterval {
	initialDelay: number;
	interval: number;

	constructor(initialDelay: number, interval: number) {
		this.initialDelay = initialDelay;
		this.interval = interval;
	}

	toString(): string {
		return `${this.initialDelay},${this.interval}`;
	}
}
