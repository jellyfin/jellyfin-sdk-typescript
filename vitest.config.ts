/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		environment: 'node',
		coverage: {
			include: ['src'],
			exclude: ['**/__helpers__/**', '**/generated-client/**'],
			reporter: [ 'text', 'html', 'lcov', 'json' ]
		}
	}
});
