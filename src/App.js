import { hot } from 'react-hot-loader/root';
import React from 'react';
import './app.css';

const App = () => {
    return(
        <div>Welcome to SSR Boilerplate. 
        </div>
    )
}

// re-rendering for hot reloading
// if(process.env.NODE_ENV === 'development' && module.hot) {
//     module.hot.accept('./App', () => {
//         App();
//     })
// }

export default hot(App);