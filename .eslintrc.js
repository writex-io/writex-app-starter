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
                    ['app', './packages/app'],
                    ['plugins', './packages/plugins'],
                ],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
        'import/extensions': [
            '.js',
            '.jsx',
        ],
    },
};
