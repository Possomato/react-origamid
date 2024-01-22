import React from 'react';
import { ContextoGlobal } from './ContextoGlobal';

export default function Produto() {
  const { dados } = React.useContext(ContextoGlobal);

  return (
    <div>
      {dados &&
        dados.map(({ id, nome, preco }) => (
          <div key={id}>
            <h4>{nome}</h4>
            <ul>
              <li>{preco}</li>
            </ul>
          </div>
        ))}
    </div>
  );
}
