/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

// Rollup rewrites relative specifiers in emitted .js with explicit
// extensions (e.g. './api' -> './api.js', './discovery' -> './discovery/index.js'),
// but @rollup/plugin-typescript's declaration emit leaves .d.ts specifiers
// bare, since tsconfig.json uses moduleResolution "bundler". Node16/NodeNext
// consumers require the .d.ts specifiers to carry the same extensions as the
// .js they describe. This walks the built lib/ and fixes that mismatch.

import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const libDir = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'lib');

function findDtsFiles(dir) {
	const files = [];
	for (const entry of readdirSync(dir)) {
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) {
			files.push(...findDtsFiles(full));
		} else if (entry.endsWith('.d.ts')) {
			files.push(full);
		}
	}
	return files;
}

function resolveSpecifier(fromDir, specifier) {
	if (existsSync(join(fromDir, `${specifier}.d.ts`))) {
		return `${specifier}.js`;
	}
	if (existsSync(join(fromDir, specifier, 'index.d.ts'))) {
		return `${specifier}/index.js`;
	}
	// Already has an extension, or points somewhere unexpected - leave as-is.
	return specifier;
}

const specifierPattern = /from (['"])(\.[^'"]*)\1/g;

for (const file of findDtsFiles(libDir)) {
	const fromDir = dirname(file);
	const original = readFileSync(file, 'utf8');
	const updated = original.replace(specifierPattern, (match, quote, specifier) =>
		`from ${quote}${resolveSpecifier(fromDir, specifier)}${quote}`);
	if (updated !== original) {
		writeFileSync(file, updated);
	}
}
