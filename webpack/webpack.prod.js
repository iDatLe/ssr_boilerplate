const path = require("path");
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');

module.exports = merge(baseConfig, {
    mode: "production",
    entry: ['./src/client/index.js'],
    output: {
        filename: "main.js", // [contentHash] Everytime the code changes, a new filename is produced for caching
        path: path.resolve(__dirname, "../dist") // have an absolute path
    },
});