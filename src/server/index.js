import express from 'express';
import bodyParser from 'body-parser';
import renderContent from './root.js';

const app = express();

// The most important part of HMR
if (process.env.NODE_ENV === 'development') {
    const webpack = require('webpack');
    const webpackConfig = require('../../webpack/webpack.client');
    const compiler = webpack(webpackConfig);
    
    app.use(require("webpack-dev-middleware")(compiler, {
        noInfo: true, publicPath: webpackConfig.output.publicPath
    }));
    app.use(require("webpack-hot-middleware")(compiler))
} else if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')))
}


const PORT = process.env.PORT || 3001;

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(renderContent);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
})