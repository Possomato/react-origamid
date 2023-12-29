import React, { useState } from 'react'
import Produto from './desafio/Produto'

// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado


export default function Desafio() {
  const [resposta, setResposta] = useState('')

  function handleProduto(event){
    setResposta(<Produto produto={event.target.innerText} />)
  }

  return (
    <div>
      <button onClick={handleProduto}>smartphone</button>
      <button onClick={handleProduto}>notebook</button>
      <button onClick={handleProduto}>tablet</button>
      <div>
        {resposta}
      </div>
    </div>
  )
}
