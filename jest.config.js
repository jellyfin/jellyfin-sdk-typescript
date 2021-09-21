/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'ts-jest',
	runner: 'groups',
	testEnvironment: 'node',
	collectCoverageFrom: [ 'src/**' ],
	coveragePathIgnorePatterns: [ '__helpers__', 'generated-client' ]
};
