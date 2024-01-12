import React from 'react'

export default function Aula2() {
  const [itens, setItens] = React.useState(0)
  const [notificacao, setNotificacao] = React.useState(null)
  const timeoutRef = React.useRef()

  function handleClick(){
    setItens(itens + 1)
    setNotificacao('item add no car')

    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null)
    }, 2000)
  }

  return (
    <div>
      <h2>Aula 02</h2>
      <button onClick={handleClick}>Adicionar carrinho {itens}</button>
      <p>{notificacao}</p>

    </div>
  )
}
