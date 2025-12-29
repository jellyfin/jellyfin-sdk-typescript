import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import vitest from '@vitest/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	// Global ignores
	{
		ignores: [
			'dist/**',
			'docs/**',
			'src/generated-client/**',
			'lib/**',
			'node_modules/**'
		]
	},

	// Base config for all files
	eslint.configs.recommended,
	...tseslint.configs.recommended,

	// Main source files config
	{
		files: ['**/*.ts', '**/*.mjs', '**/*.js'],
		plugins: {
			'@stylistic': stylistic,
			'import': importPlugin
		},
		languageOptions: {
			globals: {
				...globals.node
			}
		},
		settings: {
			'import/resolver': {
				typescript: true,
				node: true
			}
		},
		rules: {
			'import/order': ['error', {
				'alphabetize': { 'order': 'asc', 'caseInsensitive': true },
				'newlines-between': 'always-and-inside-groups'
			}],

			'@stylistic/type-annotation-spacing': ['error'],

			'@typescript-eslint/consistent-type-imports': ['error'],

			'array-callback-return': ['error'],
			'arrow-spacing': ['error'],
			'block-spacing': ['error'],
			'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
			'comma-dangle': ['error', 'never'],
			'comma-spacing': ['error'],
			'curly': ['error', 'multi-line'],
			'eol-last': ['error'],
			'indent': ['error', 'tab', { 'SwitchCase': 1 }],
			'jsx-quotes': ['error', 'prefer-single'],
			'key-spacing': ['error'],
			'keyword-spacing': ['error'],
			'max-statements-per-line': ['error'],
			'no-floating-decimal': ['error'],
			'no-multi-spaces': ['error'],
			'no-multiple-empty-lines': ['error', { 'max': 1 }],
			'no-restricted-globals': ['error'],
			'no-trailing-spaces': ['error'],
			'no-unreachable': ['error'],
			'no-unused-expressions': ['error', { 'allowShortCircuit': true, 'allowTernary': true, 'allowTaggedTemplates': true }],
			'object-curly-spacing': ['error', 'always'],
			'one-var': ['error', 'never'],
			'padded-blocks': ['error', 'never'],
			'prefer-const': ['error', { 'destructuring': 'all' }],
			'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': false }],
			'semi': ['error'],
			'no-var': ['error'],
			'space-before-blocks': ['error'],
			'space-before-function-paren': ['error', { 'anonymous': 'never', 'named': 'never', 'asyncArrow': 'always' }],
			'space-infix-ops': 'error',
			'yoda': 'error'
		}
	},

	// Source files - browser environment
	{
		files: ['src/**/*.ts'],
		languageOptions: {
			globals: {
				...globals.browser
			}
		}
	},

	// Test files config
	{
		files: ['**/*.test.ts'],
		plugins: {
			vitest
		},
		languageOptions: {
			globals: {
				...globals.node
			}
		},
		rules: {
			...vitest.configs.recommended.rules,
			'vitest/consistent-test-it': ['error'],
			'vitest/prefer-lowercase-title': ['error', { 'ignoreTopLevelDescribe': true }],
			'vitest/require-top-level-describe': ['error'],
			// Disable because we use custom `itIf` helper that the plugin doesn't recognize
			'vitest/no-standalone-expect': 'off',
			// Disable rules that require type information (would need parserOptions.project)
			'vitest/valid-title': 'off'
		}
	}
);
