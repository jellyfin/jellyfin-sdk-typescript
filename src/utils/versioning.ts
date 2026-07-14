/**
 * @returns - Array of numbers or undefined
 * (if the passed string it's not in the MAJOR.MINOR.PATCH numeric-only format)
 */
function parseVersion(version: string): number[] | undefined {
	const arr = version.split('.').map(Number);

	if (arr.length && arr.every((n) => n >= 0)) {
		return arr;
	}
}

/**
 * Compares two version strings (e.g., "1.2.3") and returns:
 * -1 if a < b
 * 1 if a > b
 * 0 if a == b
 *
 * @throws If version is not in a numeric-only semver format
 */
export function compareVersions(a: string = '', b: string = '') {
	const aParts = parseVersion(a);
	const bParts = parseVersion(b);

	if (!aParts || !bParts) {
		throw new TypeError("Version doesn't match a numeric-only semver format");
	}

	for (let i = 0, length = Math.max(aParts.length, bParts.length); i < length; i++) {
		const aVal = aParts[i] || 0;
		const bVal = bParts[i] || 0;

		if (aVal < bVal) {
			return -1;
		}

		if (aVal > bVal) {
			return 1;
		}
	}

	return 0;
}

/**
 * Check if given version is less than a baseline
 *
 * @deprecated Use {@link compareVersions} instead
 * @throws If version is not in a numeric-only semver format
 * @param check - The version to check
 * @param baseline - The minimum version considered supported
 */
export function isVersionLess(check: string, baseline: string): boolean {
	return compareVersions(check, baseline) < 0;
}

/** Formats a version (e.g., "1.2.3") string for display. */
export function getDisplayVersion(version: string | null | undefined) {
	if (!version) return;

	// For versions above 10.X, we switch to only showing MAJOR.MINOR to reflect the new versioning scheme.
	const parts = parseVersion(version);
	if (parts && compareVersions(version, '11') >= 0) {
		// Just in case we have a patch version that isn't 0, we want to show it. This should not happen.
		if (parts.length === 3 && parts[2] !== 0) return version;

		return parts.slice(0, 2).join('.');
	}

	return version;
}
