import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    {/* BrowserRouter: utilizado para navegar pela url */}
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    {/* Quando coloca um componente debaixo de outro precisa colocar os spreds <> </> */}
    <GlobalStyle />
    {/* Colocando um componente de baixo do outro ira importa todos ao mesmo tempo */}
  </>
);

export default App;
