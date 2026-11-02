/**
 * This script updates the CHANGELOG.md file with the new version information.
 */
import { readFileSync, writeFileSync } from 'node:fs';

const { version } = JSON.parse(readFileSync('package.json', 'utf8'));
const date = new Date().toISOString().slice(0, 10);
const repo = 'https://github.com/jellyfin/jellyfin-sdk-typescript';

const linkRegex = /^\[unreleased\]: .*\/compare\/v(.+)\.\.\.HEAD$/m;
let changelog = readFileSync('CHANGELOG.md', 'utf8');

const previous = changelog.match(linkRegex)?.[1];
if (!previous) throw new Error('Unreleased link not found in CHANGELOG.md');

changelog = changelog
	.replace('## [Unreleased]\n', `## [Unreleased]\n\n## [${version}] - ${date}\n`)
	.replace(linkRegex, `[unreleased]: ${repo}/compare/v${version}...HEAD\n[${version}]: ${repo}/compare/v${previous}...v${version}`);

writeFileSync('CHANGELOG.md', changelog);
