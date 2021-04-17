module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['babel', 'react', 'prettier', '@typescript-eslint'],
    rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'max-classes-per-file': ['error', 4],
        'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
        'prettier/prettier': ['warn'],
        'babel/new-cap': 1,
        'babel/camelcase': 1,
        'babel/no-invalid-this': 1,
        'babel/object-curly-spacing': 0,
        'babel/no-unused-expressions': 1,
        'babel/valid-typeof': 1,
    },
};
