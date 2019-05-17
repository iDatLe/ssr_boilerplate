import { hot } from 'react-hot-loader';
import React from 'react';
if(process.env.WEBPACK) require('./app.scss');

if(process.env.NODE_ENV !== 'production') {
  console.log('We are in development mode!');
} else {
  console.log('We are in production mode!')
}

const App = () => {

  return (
    <div>
      Welcome to the SSR Boilerplate!

    </div>
  )
}

export default hot(module)(App);