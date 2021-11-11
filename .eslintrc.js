module.exports = {
  "parser": "babel-eslint",
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true
  },
  rules: {
    'no-proto': 0
  },
  plugins: ['jest']
};
