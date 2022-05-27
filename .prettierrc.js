module.exports = {
  bracketSpacing: false,
  bracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
  importOrder: [
    '^(react|react-native)$',
    '<THIRD_PARTY_MODULES>',
    '^@core/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
};
