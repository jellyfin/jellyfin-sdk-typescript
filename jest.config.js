/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	testEnvironment: 'node',
	runner: 'groups',

	// normalize-url exports an ES module so we need to transform js files
	// and change the ignore pattern so it is transformed
	preset: 'ts-jest/presets/js-with-ts',
	globals: {
		'ts-jest': {
			tsconfig: { allowJs: true }
		}
	},
	transformIgnorePatterns: [ '/node_modules/(?!(normalize-url)/)' ],

	// Coverage options
	collectCoverageFrom: [ 'src/**' ],
	coveragePathIgnorePatterns: [ '__helpers__', 'generated-client' ]
};
