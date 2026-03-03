import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.js'],
    languageOptions: { globals: globals.node },
    ignores: ['node_modules'],
    rules: {
      'no-unreachable': 'error',
      camelcase: 'warn',
      'no-console': 'error',
      'no-empty': 'error',
      'no-var': 'error',
      'prefer-template': 'warn',
      'indent': ['error', 2],
      'no-unused-vars': 'error',
      'no-var': 'error',
      'no-control-regex': 'error',
    },
  },
]);

