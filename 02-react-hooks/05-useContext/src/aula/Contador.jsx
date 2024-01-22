import React from 'react';
import { GlobalContext } from './GlobalContext';

export default function Contador() {
  const dados = React.useContext(GlobalContext);
  return (
    <div>
      <button onClick={dados.handleClick}>{dados.contar}</button>
    </div>
  );
}
