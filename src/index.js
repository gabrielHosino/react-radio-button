import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import "bootstrap/less/bootstrap.less";


import App from '~/containers/App.js';


ReactDOM.render(
  <App className="div-container" />,
  document.getElementById('root')
);
