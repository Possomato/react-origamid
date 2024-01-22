import React from 'react';
import Aula from './aula/Aula';
import Desafio from './desafio/Desafio';


export default function App() {
  return (
    <div>
      <h1>Aula:</h1>
        <Aula />
      <h1>Desafio:</h1>
        <Desafio />
    </div>
  );
}
