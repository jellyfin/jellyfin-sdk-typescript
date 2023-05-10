/**
 * @returns - Array of 3 numbers or undefined
 * (if the passed string it's not in the MAJOR.MINOR.PATCH numeric-only format)
 */
function parseVersion(version: string): number[] | undefined {
	const arr = version.split('.').map(Number);

	if (arr.length === 3 && arr.every((n) => n >= 0)) {
		return arr;
	}
}

/**
 * Check if given version is less than a baseline
 *
 * Versions must be in semver format: X.Y.Z (Major.Minor.Patch)
 * @throws If version is not in a numeric-only semver format
 * @param check - The version to check
 * @param baseline - The minimum version considered supported
 */
export function isVersionLess(check: string, baseline: string): boolean {
	const parsedCheck = parseVersion(check);
	const parsedBaseline = parseVersion(baseline);

	if (!parsedCheck || !parsedBaseline) {
		throw new TypeError("Version doesn't match a numeric-only semver format");
	}

	const [majorCheck, minorCheck, patchCheck] = parsedCheck;
	const [majorBaseline, minorBaseline, patchBaseline] = parsedBaseline;

	return (
		majorCheck < majorBaseline ||
		(majorCheck === majorBaseline && minorCheck < minorBaseline) ||
		(majorCheck === majorBaseline && minorCheck === minorBaseline && patchCheck < patchBaseline)
	);
}
