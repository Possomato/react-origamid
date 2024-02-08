import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Você está na home</p>
      <Link to='produto/notebook'>Notebook</Link>{' '}
      <Link to='produto/smartphone'>Smartphone</Link>
    </div>
  )
}
