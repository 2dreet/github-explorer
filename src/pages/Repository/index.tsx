import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './style';
import Api from '../../services/Api';

import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

// React.FC funcion component
const Repository: React.FC = () => {
  // utilizado para obter a url ou os parametros da url
  // aqui tipando a rota
  const { params } = useRouteMatch<RepositoryParams>();

  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  // aqui um exemplo de useEffect aonde se a url mudar deve refazer a consulta
  // tomar cuidado com o useEffect pois pode ser que ele execute apenas uma vez
  // se nao passar nada para ele verificar
  useEffect(() => {
    Api.get(`repos/${params.repository}`).then((response) =>
      setRepository(response.data),
    );
    Api.get(`repos/${params.repository}/issues`).then((response) =>
      setIssues(response.data),
    );
  }, [params.repository]);
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github explorer" />
        <Link to="/">
          <FiChevronsLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong> {repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong> {repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong> {repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues &&
          issues.map((issue) => (
            <a key={issue.id} href={issue.html_url}>
              <div>
                <strong> {issue.title} </strong>
                <p> {issue.user.login}</p>
              </div>

              {/* icone de seta */}
              <FiChevronRight size={20} />
            </a>
          ))}
      </Issues>
    </>
  );
};

export default Repository;
