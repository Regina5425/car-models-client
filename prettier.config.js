/** @type {import("prettier").Config} */
module.exports = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 120,
  tabWidth: 2,
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'auto',

  plugins: ['@trivago/prettier-plugin-sort-imports'],

  importOrder: ['^react$', '^expo(.*)$', '^react-native$', '<THIRD_PARTY_MODULES>', '^@/'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
