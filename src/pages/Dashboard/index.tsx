import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositorys } from './style';
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
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const [newRepository, setNewRepository] = useState('');

  // event: FormEvent<HTMLFormElement> evento do form html
  // preventDefault para a propagacao do form
  async function handleAddRespository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    // Api.get<Repository> -> aqui define a tipagem do response
    const response = await Api.get<Repository>(`repos/${newRepository}`);

    // aqui utilizando o conceito de imutabilidade adicionando os novos repositorios
    setRepositories([...repositories, response.data]);
    setNewRepository('');
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title> Explore repositórios no Github </Title>

      <Form onSubmit={handleAddRespository}>
        <input
          value={newRepository}
          onChange={(e) => setNewRepository(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit"> Pesquisar </button>
      </Form>

      <Repositorys>
        {/* Sempre que for um componente clicavel deve usar <a> ou <button> */}
        {repositories.map((repository) => (
          // sempre que for repetir um mesmo componente precisa colocar a key
          <a key={repository.full_name} href="teste">
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
          </a>
        ))}
      </Repositorys>
    </>
  );
};

export default Dashboard;
