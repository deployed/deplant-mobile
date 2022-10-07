const path = require('path');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'testing-library', 'prettier', 'import'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    '@react-native-community',
    'plugin:testing-library/react',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  ignorePatterns: ['**/node_modules/', '**/generated/', '*.js'],
  env: {
    'jest/globals': true,
  },
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/__tests__/*.{ts,tsx}',
          '**/setupTests.ts',
          '**/*.test.{ts,tsx}',
        ],
      },
    ],
    'import/prefer-default-export': 'off',
    'global-require': 'off',
    'react/jsx-filename-extension': [1, {extensions: ['.jsx', '.tsx']}],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', {ignoreRestSiblings: true}],
    'no-nested-ternary': 'error',
    'class-methods-use-this': 'off',
    // @typescript-eslint / eslint conflicts
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {functions: true, classes: true, variables: false},
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    // React 17
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/style-prop-object': 'off',
    // testing library
    'testing-library/prefer-screen-queries': 'off',
  },
  settings: {
    'import/core-modules': ['@env'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, 'src')],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
};
