const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.ts',
    },
    stats: {
        preset: 'minimal',
        colors: true,
    },
    target: 'es5',
    module: {
        rules: [
            {
                test: [/\.tsx?$/, /\.jsx?$/],
                exclude: [/node_modules/, /\.(test|stories).tsx?$/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                        plugins: [
                            '@babel/plugin-transform-object-assign',
                            '@babel/plugin-transform-react-constant-elements',
                            '@babel/plugin-transform-runtime',
                            [
                                '@babel/plugin-proposal-class-properties',
                                { loose: true },
                            ],
                            [
                                '@babel/plugin-proposal-object-rest-spread',
                                { loose: true },
                            ],
                        ],
                    },
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '...'],
        alias: {
            '@assets': path.resolve(__dirname, 'src', 'assets'),
            '@components': path.resolve(__dirname, 'src', 'components'),
            '@interfaces': path.resolve(__dirname, 'src', 'interfaces'),
        },
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
