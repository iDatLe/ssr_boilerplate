import { hot } from 'react-hot-loader';
import React from 'react';
if(process.env.WEBPACK) require('./app.scss');

const App = () => {

  return (
    <div>
      Welcome!
    </div>
  )
}

export default hot(module)(App);