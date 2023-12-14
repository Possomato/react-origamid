import React, { useState } from 'react';
import Aulas from './topicos/Aulas';
import Desafio from './topicos/Desafio';

const App = () => {
  const [paginaAtual, setPaginaAtual] = useState(null);

  function handleNavigate(pagina) {
    setPaginaAtual(pagina);
  }

  return (
    <>
      <h1>React Hooks: useState</h1>

      <div className='tipos'>
        <button onClick={() => handleNavigate('aulas')}>Aulas</button>
        <button onClick={() => handleNavigate('desafio')}>Desafio</button>
      </div>

      {paginaAtual === 'aulas' && <Aulas />}
      {paginaAtual === 'desafio' && <Desafio />}
    </>
  );
};

export default App;
