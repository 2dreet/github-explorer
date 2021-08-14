import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepositoryParams {
  repository: string;
}

// React.FC funcion component
const Repository: React.FC = () => {
  // utilizado para obter a url ou os parametros da url
  // aqui tipando a rota
  const { params } = useRouteMatch<RepositoryParams>();
  return <h1> Repository: {params.repository} </h1>;
};

export default Repository;
