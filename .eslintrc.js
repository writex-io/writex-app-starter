module.exports = {
    extends: 'next',
    settings: {
        next: {
            rootDir: 'apps/next/',
        },
    },
    root: true,

    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        'unused-imports/no-unused-imports': 'warn',

        'no-restricted-exports': 'off',

        // Indent with 4 spaces
        indent: ['error', 4],

        // Indent JSX with 4 spaces
        'react/jsx-indent': ['error', 4],

        // Indent props with 4 spaces
        'react/jsx-indent-props': ['error', 4],
        'linebreak-style': [
            'error',
            'unix',
        ],
        quotes: [
            'error',
            'single',
        ],
        semi: [
            'error',
            'always',
        ],
        'react/jsx-filename-extension': [0],
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['@app', './app/src'],
                    ['@editor', './editor/src'],
                    ['@publishers', './publishers/src'],
                    ['@publisher', './publisher/src'],
                    ['@core', './core/src'],
                    ['@translations', './translations'],
                    ['@auth', './auth/src'],
                    ['@account', './pricing/src'],
                    ['@widgets', './widgets/src'],
                    ['@reader', './reader/src'],
                    ['@mybooks', './mybooks/src'],
                    ['@subscriptions', './subscriptions/src'],
                ],
                extensions: ['.js', '.jsx'],
            },
        },
        'import/extensions': [
            '.js',
            '.jsx',
        ],
    },
};
