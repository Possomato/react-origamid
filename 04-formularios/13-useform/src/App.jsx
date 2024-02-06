import React from 'react';
import Input from './form/Input';
import useForm from './hooks/useForm';

export default function App() {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm('nome');

  function handleSubmit(event) {
    event.preventDefault();
    cep.validate() && email.validate() && nome.validate()
      ? console.log('enviar')
      : console.log('não enviar');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        label="CEP"
        id="cep"
        placeholder="00000-000"
        maxLength="9"
        {...cep}
      />
      <Input type="email" label="e-mail" id="email" {...email} />
      <Input type="text" label="nome" id="nome" {...nome} />
      <button>enviar</button>
    </form>
  );
}
