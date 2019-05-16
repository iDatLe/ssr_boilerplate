import { hot } from 'react-hot-loader';
import React from 'react';
if(process.env.WEBPACK) require('./app.scss');

const App = () => {

  return (
    <div>
      Welcome to the SSR Boilerplate!
    </div>
  )
}

export default hot(module)(App);