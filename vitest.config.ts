/// <reference types="vitest" />

/* eslint-disable import/no-unresolved */
import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		environment: 'node',
		// TODO: There is no extension I know of that will let Vitest group tests like this was
		globals: true,
		coverage: {
			exclude: ['__helpers__', 'generated-client']
		}
	}
});
