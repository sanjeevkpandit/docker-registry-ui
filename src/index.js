import React from 'react';
// import dotenv from 'dotenv';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'bulma/css/bulma.min.css';

import App from './App';

// dotenv.config({
//   path: '../.env'
// });

ReactDOM.render(
  <BrowserRouter basename='/docker-registry-ui'>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
