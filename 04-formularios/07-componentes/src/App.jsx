import React from 'react';
import Input from './form/Input';
import Select from './form/Select';
import Radio from './Radio';

export default function App() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  return (
    <form>
      <Select
        options={['tablet', 'smartphone', 'laptop']}
        value={produto}
        setValue={setProduto}
      />
      <Radio
        options={['azul', 'vermelho']}
        value={cor}
        setValue={setCor}
      />
      <Input id="nome" label="nome" value={nome} setValue={setNome} required />
      <Input id="email" label="e-mail" value={email} setValue={setEmail} />
      <button>enviar</button>
    </form>
  );
}
