module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/standard',
    'airbnb-base'
  ],
  rules: {
    'max-len': ['error', {
      code: 150,
      tabWidth: 2,
      ignoreUrls: true,
      ignoreRegExpLiterals: true,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreStrings: true
    }],
    'radix': ['error', 'as-needed'],
    'template-curly-spacing': 'off',
    'indent': 'off', // dynamic require
    'no-plusplus': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? ['error'] : 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/component-name-in-template-casing': 'off',
    'comma-dangle': ['error', 'never'],
    'semi': ['error', 'never'],
    'quote-props': ['error', 'consistent-as-needed'],
    'import/no-unresolved': 'off',
    'space-before-function-paren': ['error', 'always'],
    'object-curly-newline': 'off',
    'no-underscore-dangle': 'off',
    'no-shadow': ['error', { allow: ['state'] }],
    'prefer-destructuring': ['error', { object: true, array: false }],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'acc', // for reduce accumulators
        'state',
        'el',
        'Vue'
      ]
    }],
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-bitwise': ['error', { int32Hint: true }]
  },
  parserOptions: {
    parser: 'babel-eslint',
    allowImportExportEverywhere: true
  },
  settings: {
    'import/core-modules': ['vue', 'vuex'] // these modules are included in nuxt.js
  }
}
