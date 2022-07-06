/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	testEnvironment: 'node',
	runner: 'groups',

	preset: 'ts-jest/presets/js-with-ts',
	globals: {
		'ts-jest': {
			tsconfig: { allowJs: true }
		}
	},

	// Coverage options
	collectCoverageFrom: [ 'src/**' ],
	coveragePathIgnorePatterns: [ '__helpers__', 'generated-client', 'normalize-url' ]
};
