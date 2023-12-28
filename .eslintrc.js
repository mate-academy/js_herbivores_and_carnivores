module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true
  },
  rules: {
    'no-proto': 0,
    'Unexpected token =': null,
  },
  plugins: ['jest'],
  parser: "@babel/eslint-parser"
};
