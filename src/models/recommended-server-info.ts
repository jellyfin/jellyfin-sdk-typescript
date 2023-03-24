/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { PublicSystemInfo } from '../generated-client/models/public-system-info';

import type { RecommendedServerIssue } from './recommended-server-issue';

/** Possible score values for recommended servers. */
export enum RecommendedServerInfoScore {
	GREAT = 2,
	GOOD = 1,
	OK = 0,
	BAD = -1
}

/** Information about a recommended server. */
export interface RecommendedServerInfo {
	address: string,
	responseTime: number,
	score: RecommendedServerInfoScore,
	issues: Array<RecommendedServerIssue>
	systemInfo?: PublicSystemInfo
}
