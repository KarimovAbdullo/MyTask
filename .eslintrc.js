module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    semi: ['error', 'never'],
    'react-hooks/exhaustive-deps': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'react/no-unstable-nested-components': 'off',
  },
  env: {
    node: true,
  },
}
