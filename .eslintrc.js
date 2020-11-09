module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
  },
  plugins: [
    'svelte3',
  ],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  extends: ['eslint-config-airbnb-base'],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/no-mutable-exports': 0,
    'import/prefer-default-export': 0,
    'import/first': 0,
    'no-console': 0,
    camelcase: 0,
    semi: 0,
  },
  settings: {
    'svelte3/ignore-styles': (attr) => !!attr.lang,
    'svelte3/named-blocks': false,
  },
};
