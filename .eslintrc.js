module.exports = {
    'root': true,
    'parser': 'babel-eslint',
    'rules': {
        'indent': [ 2, 'tab', { 'SwitchCase': 1 } ],
        'semi': [ 2, 'never' ],
        'keyword-spacing': [ 2, { 'before': true, 'after': true } ],
        'space-before-blocks': [ 2, 'always' ],
        'no-mixed-spaces-and-tabs': [ 2, 'smart-tabs' ],
        'no-cond-assign': 0,
        'no-unused-vars': 2,
        'object-shorthand':  [ 2, 'always' ],
        'no-const-assign': 2,
        'no-class-assign': 2,
        'no-this-before-super': 2,
        'no-var': 2,
        'no-unreachable': 2,
        'valid-typeof': 2,
        'quote-props': [ 2, 'as-needed' ],
        'one-var': [ 2, 'never' ],
        'prefer-arrow-callback': 2,
        'prefer-const': [ 2, { 'destructuring': 'all' } ],
        'arrow-spacing': 2,
        'no-inner-declarations': 0
    },
    'env': {
        'es6': true,
        'browser': true,
        'node': true,
        'cypress/globals': true
    },
    'plugins': [
        'svelte3',
        'cypress'
    ],
    'extends': [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:cypress/recommended'
    ],
    'parserOptions': {
        'ecmaVersion': 2017,
        'sourceType': 'module'
    },
    'settings': {
        'svelte3/ignore-styles': ({ lang }) => { return lang === 'postcss' }
    }
}