const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = merge(baseConfig, {
    mode: 'development',
    entry: [
        path.join(process.cwd(), './src/server/index.js')
    ],
    output: {
        filename: 'server.js',
        path: path.join(process.cwd(), 'build')
    },
    target: 'node',
    externals: [webpackNodeExternals()]
});