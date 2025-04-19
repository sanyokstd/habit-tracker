module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier
  ],
  plugins: ['react', 'react-native'],
  rules: {
    'prettier/prettier': 'error', // Show Prettier issues as ESLint errors
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
  },
};
