/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  bracketSameLine: false,
  jsxSingleQuote: false,
  printWidth: 80,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '^(contentlayer/generated$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/stores/(.*)$',
    '^@/config$',
    '^@/components/(.*)$',
    '^@/lib/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ['typescript', 'jsx'],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
};
