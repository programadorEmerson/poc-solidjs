import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import importHelpersPlugin from 'eslint-plugin-import-helpers';
import prettierPlugin from 'eslint-plugin-prettier';
import solidPlugin from 'eslint-plugin-solid';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';

export default [
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: typescriptParser,
    },
    plugins: {
      solid: solidPlugin,
      '@typescript-eslint': typescriptPlugin,
      prettier: prettierPlugin,
      'unused-imports': unusedImportsPlugin,
      'import-helpers': importHelpersPlugin,
      import: importPlugin,
    },
    rules: {
      '@typescript-eslint/no-misused-promises': 0,
      '@typescript-eslint/no-floating-promises': 0,
      '@typescript-eslint/consistent-type-assertions': 0,
      '@typescript-eslint/strict-boolean-expressions': 0,
      '@typescript-eslint/no-non-null-assertion': 'off',
      'unused-imports/no-unused-imports': 2,
      'no-console': 0,
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'max-len': [
        'error',
        {
          code: 120,
          ignoreComments: true,
          ignoreUrls: true,
        },
      ],
      'linebreak-style': ['error', 'unix'],
      'no-else-return': ['error'],
      'object-curly-spacing': ['error', 'always'],
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
        },
      ],
      indent: ['error', 2],
      'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
      '@typescript-eslint/explicit-function-return-type': 0,
      'import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'always',
          groups: [
            '/^@/pages/',
            '/^@/services/',
            '/^@/components/',
            '/^@/utils/',
            ['module'],
            ['/^~//'],
            ['parent', 'sibling', 'index'],
          ],
          alphabetize: {
            order: 'asc',
            ignoreCase: true,
          },
        },
      ],
      'prettier/prettier': 'error',
      'import/no-relative-parent-imports': 'error',
    },
    settings: {
      'solid/typescript': true,
    },
  },
];
