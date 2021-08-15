import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './style';

import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

// React.FC funcion component
const Repository: React.FC = () => {
  // utilizado para obter a url ou os parametros da url
  // aqui tipando a rota
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github explorer" />
        <Link to="/">
          <FiChevronsLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://c.s-microsoft.com/pt-br/CMSImages/windows10-laptop.png?version=0bf90e10-f3b6-acaf-41fd-1c538d8c24bc"
            alt="teste"
          />
          <div>
            <strong>Title</strong>
            <p>subtitle</p>
          </div>
        </header>
        <ul>
          <li>
            <strong> 11</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong> 11</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong> 11</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="aa">
          <div>
            <strong> aaa </strong>
            <p> bbb</p>
          </div>

          {/* icone de seta */}
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
