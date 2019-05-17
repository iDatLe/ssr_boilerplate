const path = require("path");
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(baseConfig, {
    mode: "production",
    entry: ['@babel/polyfill', './src/client/index.js'],
    output: {
        filename: "bundle.js", // [contentHash] Everytime the code changes, a new filename is produced for caching
        path: path.resolve(__dirname, "../dist") // have an absolute path
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': 'production'
        }),
        new CleanWebpackPlugin()
    ] // Deletes old dist file and creates a new one
});