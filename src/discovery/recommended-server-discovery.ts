/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { AxiosError, AxiosResponse } from 'axios';
import { compare } from 'compare-versions';

import type { PublicSystemInfo } from '../generated-client/models/public-system-info';
import type { Jellyfin } from '../jellyfin';
import type { RecommendedServerInfo } from '../models/recommended-server-info';
import { RecommendedServerInfoScore } from '../models/recommended-server-info';
import type { RecommendedServerIssue } from '../models/recommended-server-issue';
import { ProductNameIssue, SlowResponseIssue, SystemInfoIssue, VersionMissingIssue, VersionOutdatedIssue, VersionUnsupportedIssue } from '../models/recommended-server-issue';
import { getSystemApi } from '../utils/api/system-api';
import { API_VERSION, MINIMUM_VERSION } from '../versions';

/** The result of a SystemInfo request. */
interface SystemInfoResult {
	address: string,
	response?: AxiosResponse<PublicSystemInfo>,
	error?: AxiosError,
	responseTime: number
}

/** The expected product name in system info. */
const PRODUCT_NAME = 'Jellyfin Server';
/** Requests taking longer than 3s are considered slow. */
const SLOW_RESPONSE_TIME = 3000;
/** System info request timeout. */
const HTTP_TIMEOUT = 5000;

/** Get the minimum RecommendedServerInfoScore from an array. */
function getMinScore(scores: Array<RecommendedServerInfoScore>, defaultScore = RecommendedServerInfoScore.GREAT): RecommendedServerInfoScore {
	return scores.length > 0 ? Math.min(...scores) : defaultScore;
}

/** Builds a RecommendedServerInfo from a SystemInfoResult. */
function toRecommendedServerInfo(result: SystemInfoResult): RecommendedServerInfo {
	const issues: Array<RecommendedServerIssue> = [];
	const scores: Array<RecommendedServerInfoScore> = [];

	if (!result.response?.data || result.error) {
		// The response did not return valid data or returned an error
		issues.push(new SystemInfoIssue(result.error));
		scores.push(RecommendedServerInfoScore.BAD);
	} else if (result.response.data.ProductName !== PRODUCT_NAME) {
		// The product name returned was invalid
		issues.push(new ProductNameIssue(result.response.data.ProductName));
		scores.push(RecommendedServerInfoScore.BAD);
	}

	const version = result.response?.data.Version;
	if (!version) {
		// No version was returned
		issues.push(new VersionMissingIssue());
		scores.push(RecommendedServerInfoScore.BAD);
	} else if (compare(version, MINIMUM_VERSION, '<')) {
		// Version is less than the minimum supported
		issues.push(new VersionUnsupportedIssue(version));
		scores.push(RecommendedServerInfoScore.OK);
	} else if (compare(version, API_VERSION, '<')) {
		// Version is less than the generated client, but above the minimum
		issues.push(new VersionOutdatedIssue(version));
		scores.push(RecommendedServerInfoScore.GOOD);
	}

	if (result.responseTime > SLOW_RESPONSE_TIME) {
		// Response was slow
		issues.push(new SlowResponseIssue(result.responseTime));
		scores.push(RecommendedServerInfoScore.GOOD);
	}

	return {
		address: result.address,
		responseTime: result.responseTime,
		score: getMinScore(scores),
		issues,
		systemInfo: result.response?.data
	};
}

/** Class to discover and evaluate potential servers. */
export class RecommendedServerDiscovery {
	private jellyfin;

	constructor(jellyfin: Jellyfin) {
		this.jellyfin = jellyfin;
	}

	/**
	 * Fetches the RecommendedServerInfo for a single server address.
	 * @param address The server address.
	 * @returns The resulting RecommendedServerInfo.
	 */
	async fetchRecommendedServerInfo(address: string): Promise<RecommendedServerInfo> {
		const api = this.jellyfin.createApi(address);
		const startTime = Date.now();

		return getSystemApi(api).getPublicSystemInfo({ timeout: HTTP_TIMEOUT })
			.then(response => ({
				address,
				response,
				responseTime: Date.now() - startTime
			}))
			.catch(error => ({
				address,
				error,
				responseTime: Date.now() - startTime
			}))
			.then(result => toRecommendedServerInfo(result));
	}

	/**
	 * Fetches the RecommendedServerInfo for multiple server addresses.
	 * @param servers An array of server addresses.
	 * @returns The RecommendedServerInfo for each address.
	 */
	async discover(servers: Array<string>, minimumScore = RecommendedServerInfoScore.BAD): Promise<Array<RecommendedServerInfo>> {
		return (await Promise.all(
			servers.map(server => this.fetchRecommendedServerInfo(server))
		)).filter(serverInfo => serverInfo.score >= minimumScore);
	}
}
