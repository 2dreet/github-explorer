import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositorys } from './style';
import logoImg from '../../assets/logo.svg';

// React.FC funcion component
const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title> Explore repositórios no Github </Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit"> Pesquisar </button>
      </Form>

      <Repositorys>
        {/* Sempre que for um componente clicavel deve usar <a> ou <button> */}
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/13600715?v=4"
            alt="José Augusto"
          />
          <div>
            <strong> Teste </strong>
            <p> nome do repositório</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/13600715?v=4"
            alt="José Augusto"
          />
          <div>
            <strong> Teste </strong>
            <p> nome do repositório</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/13600715?v=4"
            alt="José Augusto"
          />
          <div>
            <strong> Teste </strong>
            <p> nome do repositório</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositorys>
    </>
  );
};

export default Dashboard;
