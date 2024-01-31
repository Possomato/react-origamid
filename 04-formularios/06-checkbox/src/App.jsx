import React from 'react';
import AulaUm from './aula/AulaUm';
import Aula from './aula/Aula';
import Desafio from './Desafio/Desafio';

export default function App() {
  const [pagAtual, setPagAtual] = React.useState(null);

  function handleClick({ target }) {
    const valor = target.innerText;

    valor == 'Aula'
      ? setPagAtual(<Aula />)
      : setPagAtual(<Desafio />)
  }

  return (
    <div>
      <div>
        <button onClick={handleClick}>Aula</button>
        <button onClick={handleClick}>Desafio</button>
      </div>
      <div>{pagAtual}</div>
    </div>
  );
}
