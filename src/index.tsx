import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  // StrictMode isola todo o Codigo da aplicacao
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
