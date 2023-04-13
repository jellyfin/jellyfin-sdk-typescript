/**
 * Check if given version is less than a baseline
 *
 * Versions must be in semver format: X.Y.Z (Major.Minor.Patch)
 * @param check - The version to check
 * @param baseline - The minimum version considered supported
 */
export function isVersionLess(check: string, baseline: string): boolean {
	const [majorCheck, minorCheck, patchCheck] = check.split('.').map(Number);
	const [majorBaseline, minorBaseline, patchBaseline] = baseline.split('.').map(Number);

	return (
		majorCheck < majorBaseline ||
		(majorCheck === majorBaseline && minorCheck < minorBaseline) ||
		(majorCheck === majorBaseline && minorCheck === minorBaseline && patchCheck < patchBaseline)
	);
}
