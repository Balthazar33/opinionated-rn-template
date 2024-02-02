module.exports = {
  root: true,
  extends: ['@react-native'],
  env: {
    es2024: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['unicorn'],
  rules: {
    'unicorn/no-unused-properties': 'error',
  },
};
