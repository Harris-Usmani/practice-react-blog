//Small React Blog project designed with the basic to moderte knowledge of React.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />                               {/* Central parent component. */}
  </React.StrictMode>,
  document.getElementById('root')
);