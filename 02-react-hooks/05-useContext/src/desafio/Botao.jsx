import React from 'react'
import { ContextoGlobal } from './ContextoGlobal'

export default function Botao() {

  const dados = React.useContext(ContextoGlobal)
  
  return (
    <button onClick={dados.clickDeletar}>
      DELETAR
    </button>
  )
}
