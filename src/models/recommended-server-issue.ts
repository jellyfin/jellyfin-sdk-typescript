/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/** Class representing an issue encountered with a recommended server. */
export abstract class RecommendedServerIssue {}

/** Class representing an issue with the returned product name. */
export class ProductNameIssue extends RecommendedServerIssue {
	/** The product name returned in the system information. */
	productName;

	constructor(productName?: string | null) {
		super();
		this.productName = productName;
	}
}

/** Class representing a slow response from a server. */
export class SlowResponseIssue extends RecommendedServerIssue {
	/** The response time from the server. */
	responseTime;

	constructor(responseTime: number) {
		super();
		this.responseTime = responseTime;
	}
}

/**
 * Class representing an issue with the system information.
 * This could be due to a networking error or invalid address.
 */
export class SystemInfoIssue extends RecommendedServerIssue {
	/** The error generated by the request. */
	error;

	constructor(error?: Error) {
		super();
		this.error = error;
	}
}

/** Class representing the version was missing from system information. */
export class VersionMissingIssue extends RecommendedServerIssue {}

/**
 * Class representing the server version is outdated.
 * (The version is lower than the generated client, but higher than the minimum supported.)
 */
export class VersionOutdatedIssue extends RecommendedServerIssue {
	version;

	constructor(version: string) {
		super();
		this.version = version;
	}
}

/**
 * Class representing the server version is unsupported.
 * (The version is lower than the minimum supported.)
 */
export class VersionUnsupportedIssue extends RecommendedServerIssue {
	version;

	constructor(version: string) {
		super();
		this.version = version;
	}
}