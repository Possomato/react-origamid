import React from 'react'

export default function ButtonModal({setModal}) {
  function handleClick(){
    setModal(ativo => !ativo)
  }

  return (
    <button onClick={handleClick}>
      abrir
    </button>
  )
}
