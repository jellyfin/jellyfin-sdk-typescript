module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
		'import'
	],
	env: {
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript'
	],
	rules: {
		'import/order': ['error', {
			'alphabetize': { 'order': 'asc', 'caseInsensitive': true },
			'newlines-between': 'always-and-inside-groups'
		}],

		'array-callback-return': ['error'],
		'block-spacing': ['error'],
		'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
		'comma-dangle': ['error', 'never'],
		'comma-spacing': ['error'],
		'eol-last': ['error'],
		'indent': ['error', 'tab', { 'SwitchCase': 1 }],
		'jsx-quotes': ['error', 'prefer-single'],
		'keyword-spacing': ['error'],
		'max-statements-per-line': ['error'],
		'no-floating-decimal': ['error'],
		'no-multi-spaces': ['error'],
		'no-multiple-empty-lines': ['error', { 'max': 1 }],
		'no-restricted-globals': ['error'],
		'no-trailing-spaces': ['error'],
		'no-unused-expressions': ['error', { 'allowShortCircuit': true, 'allowTernary': true, 'allowTaggedTemplates': true }],
		'one-var': ['error', 'never'],
		'padded-blocks': ['error', 'never'],
		'prefer-const': ['error', {'destructuring': 'all'}],
		'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': false }],
		'semi': ['error'],
		'no-var': ['error'],
		'space-before-blocks': ['error'],
		'space-before-function-paren': ['error', { 'anonymous': 'never', 'named': 'never', 'asyncArrow': 'always' }],
		'space-infix-ops': 'error',
		'yoda': 'error'
	},
	overrides: [
		{
			files: [
				'./src/**'
			],
			env: {
				node: false,
				browser: true
			}
		}
	]
};
