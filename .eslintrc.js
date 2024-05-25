module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'jest'],
  extends: [
    '@react-native',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'prettier', // Disables ESLint rules that conflict with Prettier
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    'jest/globals': true,
  },
  rules: {
    'no-console': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'prefer-const': 'off',
  },
};
