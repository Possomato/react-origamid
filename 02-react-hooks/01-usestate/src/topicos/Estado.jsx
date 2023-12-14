// 1 – Estado
// representação do aplicativo em determinado momento, exemplos: os dados do usuário foram carregados, o botão está ativo, o usuário está na página de contato, etc..

import React from 'react'

const Estado = () => {
  // exemplo do botão
  const ativo = true

  return (
    <>
      <p>Estado</p>
      <button disabled={!ativo}>{!ativo ? 'desativado' : 'ativado'}</button>
    </>
  );
}

export default Estado
