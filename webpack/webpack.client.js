const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');

module.exports = merge(baseConfig, {
    mode: 'development',
    entry: ['webpack-hot-middleware/client', './src/client/index.js'],
    output: {
        filename: "bundle.js", 
        path: path.join(__dirname, "../dist"), // have an absolute path
    },
    devtool: 'inline-source-map',
    devServer: {
        publicPath: '/',
        contentBase: path.join(__dirname, '../dist'),
        hot: true,
        inline: true,
        overlay: true,
        port: 8080,
        proxy: {
            '**': {
                target: 'http://localhost:3001',
                changeOrigin: true,
                secure: false
            }
        }
    },
})