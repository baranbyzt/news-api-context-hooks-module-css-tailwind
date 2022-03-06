import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import ContextApi from './contextStore/ContextApi'
ReactDOM.render(
  <React.StrictMode>
    <ContextApi />
  </React.StrictMode>,
  document.getElementById('root')
);

