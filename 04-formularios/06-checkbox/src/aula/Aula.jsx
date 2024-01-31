import React from 'react';
import AulaUm from './AulaUm';
import AulaDois from './AulaDois';

export default function Aula() {
  return (
    <div>
      <h1>Aula</h1>
      <h2>1 check</h2>
        <AulaUm />
      <h2>Múltiplos checks</h2>
        <AulaDois />
    </div>
  );
}
