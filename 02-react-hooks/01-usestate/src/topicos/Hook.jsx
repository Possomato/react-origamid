import React from 'react'

const Hook = () => {
  const [ativo, setAtivo] = React.useState(false) 
  // const ativoValor = ativoHook[0] //1º argumento = estado inicial
  // const atualizaValor = ativoHook[1] //2º argumento = função que muda o estado inicial
  const [contar, setContar] = React.useState(0)

  function handleClick(){
    setAtivo(!ativo)
    setContar(contar + 1)
  }

  return (
    <>
      <p>Hook</p>
      <button onClick={handleClick}>
        {ativo ? 'ativo' : 'inativo'}
        {' '}
        {contar}
      </button>
    </>
  )
}

export default Hook
