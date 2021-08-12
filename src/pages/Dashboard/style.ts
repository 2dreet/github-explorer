import styled from 'styled-components';
import { shade } from 'polished';

// `` se chama Template literals
// styled-components tem toda os componentes html
export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;
`;

// Quando define display flex e passa 1 elemente flex 1
// esse elemento tentara ocupar o maximmo do tamanho disponivel
// colocando os compentes dentro do style como o input e o button
// todos esses dentro do form vao receber o style
export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    /* ao colocar &:: se refere ao mesmo componente apenas com estado diferente ou propiedade */
    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    // aqui vai aplicar esse efeito quando trocar de cor o background
    transition: background-color 0.2s;

    // aqui outro exemplo utilizando o msm componente
    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositorys = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;

    // responsavel por dizer que esse componente é um bloco/container
    display: block;
    // responsavel por tirar o estilo do link
    text-decoration: none;

    display: flex;
    align-items: center;
    // aqui aplica efeito quando usa o transform
    transition: transform 0.2s;

    // aqui outro exemplo utilizando o msm componente
    &:hover {
      transform: translateX(10px);
    }

    // aqui fala se o proximo componente depois dele for igual a ele aplica o css
    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
