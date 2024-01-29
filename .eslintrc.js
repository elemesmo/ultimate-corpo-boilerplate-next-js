module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'simple-import-sort',
    '@tanstack/query',
  ],
  rules: {
    curly: 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/prefer-default-export': 'off',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.*', 'scripts/*'],
        peerDependencies: true,
      },
    ],
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/jsx-no-bind': 'off',
    'class-methods-use-this': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-console': ['warn', { allow: ['error', 'info'] }],
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/no-rest-destructuring': 'warn',
    '@tanstack/query/stable-query-client': 'error',
  },
  overrides: [
    {
      files: ['**/*.js', '**/*.ts', '**/*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Side effect imports
              ['^\\u0000'],
              // `react` first, `next` second, then packages starting with a character
              ['^react', '^next', '^@[a-z]', '^[a-z]'],
              // RTL packages
              ['^@testing-library'],
              ['^~/[a-z]'],
              ['^~/\\.\\./[a-z]'],
              // Imports starting with `../`
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Imports starting with `./`
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports
              ['^.+\\.s?css$'],
            ],
          },
        ],
      },
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/react'],
      rules: {
        '@typescript-eslint/no-floating-promises': 'error',
      },
    },
  ],
};
