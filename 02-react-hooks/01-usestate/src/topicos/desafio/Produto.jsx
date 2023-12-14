import React from 'react';

export default function Produto({ dados }) {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>{dados.preco}</p>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
    </div>
  );
}
