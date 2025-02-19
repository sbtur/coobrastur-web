import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import onlyWarn from 'eslint-plugin-only-warn';
import turboPlugin from 'eslint-plugin-turbo';
import tseslint from 'typescript-eslint';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
      'simple-import-sort': simpleImportSortPlugin,
      import: importPlugin,
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
      'sort-imports': 'off',
      'import/order': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // React e Next.js relacionados
            ['^react', '^next', '^@next'],
            // Pacotes de terceiros
            ['^\\w'],
            // Aliases começando com @
            ['^@workspace', '^@/'],
            // Aliases sem @
            ['^components', '^providers', '^hooks', '^utils'],
            // Imports relativos
            ['^\\.'],
            // Imports de estilos
            ['^.+\\.s?css$'],
            // Imports de tipos
            ['^@/types'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ['dist/**'],
  },
];
