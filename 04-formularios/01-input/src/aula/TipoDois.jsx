//Podemos definir um objeto que irá conter todos os valores dos campos do formulário.

import React from 'react';

export default function TipoDois() {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
  });

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <div>
      <h3>Tipo "objeto"</h3>
      <form>
        <label htmlFor="nome">nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={form.nome}
          onChange={handleChange}
        />{form.nome}
        <p></p>
        <label htmlFor="email">e-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {form.email}
        <button>Enviar</button>
      </form>
    </div>
  );
}
