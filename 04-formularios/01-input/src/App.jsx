import React from 'react';
import Aula from './aula/Aula';
import Desafio from './desafio/Desafio';

export default function App() {
  const [paginaAtual, setPaginaAtual] = React.useState(null);

  function handleClick({ target }) {
    const buttonName = target.textContent;
    buttonName == 'Aula'
      ? setPaginaAtual(<Aula />)
      : setPaginaAtual(<Desafio />);
  }

  return (
    <div>
      <h1>Formulário | Input</h1>
      <button onClick={handleClick}>Aula</button>
      <button onClick={handleClick}>Desafio</button>
      <div>{paginaAtual}</div>
    </div>
  );
}
