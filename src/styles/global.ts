// utilizado para criar style glogal
import { createGlobalStyle } from 'styled-components';

// exemplo de importacao de svg
import githubBackground from '../assets/github-background.svg';

// Para utilizar as fonts pegar em goolge.fonts
// https://fonts.google.com/specimen/Roboto
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    // Pesquisar sobre
    box-sizing: border-box;
  }

  body {
    // aqui colocar a imagem importada como background,
    // no-repeat server para não repetir a img
    // 70% top ajusta a localização da img
    background: #F0F0F5 url(${githubBackground}) no-repeat 70% top;
    // deixa a font sem os cerrilhados
    -webkit-font-smoothing: antialiased;
  }

  // quando colocar , na font é caso não carregue 1 pega a outra
  body , input , button {
    font: 16px Roboto, sans-serif;
  }

  // root é o main do app la em pages/index.html
  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
