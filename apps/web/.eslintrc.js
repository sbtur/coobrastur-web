/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@workspace/eslint-config/base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: ['tsconfig.json'],
      },
    },
  },
};
