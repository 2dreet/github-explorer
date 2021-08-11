import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

//  BrowserRouter: utilizado para navegar pela url
const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
