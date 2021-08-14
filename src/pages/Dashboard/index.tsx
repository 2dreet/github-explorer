import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Title, Form, Repositorys, Error } from './style';
import logoImg from '../../assets/logo.svg';
import Api from '../../services/Api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

// React.FC funcion component
const Dashboard: React.FC = () => {
  // define a tipagem da lista de repositories
  // é possivel tbm na isntancia do atibuto ou classe
  // fazer a intancia por funcao retornando o valor que deseja
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const repositoriesInLocalStotage = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (repositoriesInLocalStotage) {
      return JSON.parse(repositoriesInLocalStotage);
    }

    return [];
  });

  const [newRepository, setNewRepository] = useState('');

  // variavel responsavel por mostrar se tem erro ao adicionar o repositorio
  const [inputError, setInputError] = useState('');

  // userEffect dispara sempre quando a variavel repositories tem seu conteudo alterado
  useEffect(() => {
    // localstore é global no app
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  // event: FormEvent<HTMLFormElement> evento do form html
  // preventDefault para a propagacao do form
  async function handleAddRespository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepository) {
      setInputError('Digite autor/nome do repositório');
      return;
    }

    try {
      // Api.get<Repository> -> aqui define a tipagem do response
      const response = await Api.get<Repository>(`repos/${newRepository}`);

      // aqui utilizando o conceito de imutabilidade adicionando os novos repositorios
      setRepositories([...repositories, response.data]);
      setNewRepository('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por este repositório');
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title> Explore repositórios no Github </Title>
      {/* Aqui exemplo de props passadas para a style */}
      <Form hasError={!!inputError} onSubmit={handleAddRespository}>
        <input
          value={newRepository}
          onChange={(e) => setNewRepository(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit"> Pesquisar </button>
      </Form>

      {/* aqui se tiver valor na inputError mostra o erro
        No caso aqui do Error é um span com style
      */}
      {inputError && <Error> {inputError} </Error>}
      <Repositorys>
        {/* Sempre que for um componente clicavel deve usar <a> ou <button> */}
        {repositories.map((repository) => (
          // sempre que for repetir um mesmo componente precisa colocar a key
          // Link é utilizado para navegação interna no app
          // to -> é pra indicar para aonde ir
          <Link
            key={repository.full_name}
            to={`/repository/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong> {repository.full_name} </strong>
              <p> {repository.description}</p>
            </div>

            {/* icone de seta */}
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositorys>
    </>
  );
};

export default Dashboard;
