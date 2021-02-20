//Small React Blog project designed with the basic to moderte knowledge of React.
//Make sure you run the JSON server or else it won't be able to fetch the blogs. Run the server using `npx json-server --watch data/blogDatabase.json --port 8000`

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