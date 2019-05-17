const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = merge(baseConfig, {
    target: 'node',
    externals: [webpackNodeExternals()],
    entry: [
        '@babel/polyfill', 
        './src/server/index.js'
    ],
    output: {
        filename: 'server.bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: {
                    loader: 'ignore-loader'
                }
            }
        ]
    }
});