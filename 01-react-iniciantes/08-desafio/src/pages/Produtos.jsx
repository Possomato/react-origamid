import React from 'react'
import Title from '../components/Title';
import Produto from '../components/Produto';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const nomesProdutos = produtos.map((nome) => nome.nome)
const propsProdutos = produtos.map((nome) => nome.propriedades)

const props1 = propsProdutos[0]
const props2 = propsProdutos[1]

console.log(nomesProdutos)



const Produtos = () => {
  return (
    <>
      <Title title='Produtos' color='green'/>
      <Produto name={nomesProdutos[0]} prop1={props1[0]} prop2={props1[1]}/>
      <Produto name={nomesProdutos[1]} prop1={props2[0]} prop2={props2[1]}/>
    </>
  )
}

export default Produtos
