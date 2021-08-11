import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';

//  BrowserRouter: utilizado para navegar pela url
// Quando coloca um componente debaixo de outro precisa colocar os spreds <> </>
// Colocando um componente de baixo do outro ira importa todos ao mesmo tempo
const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
