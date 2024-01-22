import React from 'react';
import Produto from './Produto';
import { ContextoArmazenado } from './ContextoGlobal';
import Botao from './Botao';

export default function Desafio() {
  return (
    <ContextoArmazenado>
      <Produto />
      <Botao />
    </ContextoArmazenado>
  );
}
