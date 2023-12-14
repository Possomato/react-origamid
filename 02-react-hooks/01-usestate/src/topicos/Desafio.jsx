import React, { useState } from 'react';
import Produto from './desafio/Produto';

export default function Desafio() {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }
  return (
    <div>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>tablet</button>
      <button onClick={handleClick}>smartphone</button>
      {carregando && <p>carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </div>
  );
}
