import React from 'react';

export default function TipoUm() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  function handleClick(event){
    event.preventDefault()
    console.log(event)
  }

  return (
    <div>
      <h3>Tipo "simples"</h3>
      <form onSubmit={handleClick}>
        <label htmlFor="nome">nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={nome}
          onChange={({ target }) => setNome(target.value)}
        />
        <label htmlFor="email">e-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
}
