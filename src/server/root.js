import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
// import serialize from 'serialize-javascript'; /* Only use for redux */
import App from '../App.js';

const renderContent = (req, res) => {
  const content = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>
  );

  res.status(200);
  res.send(
  `
    <!doctype html>
    <html lang='en'>
      <head>
        <title>Dat Le's Portfolio</title>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="main.js"></script>
      </body>
    </html>
  `
  );
}

export default renderContent;