import React from 'react';
import Input from './Input';

export default function App() {
  const [cep, setCep] = React.useState('');
  const [error, setError] = React.useState(null);

  function validateCep(value) {
    if (value.length == 0) {
      setError('preencha um valor');
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('preencha um cep válido');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    validateCep(target.value);
  }

  function handleChange({ target }) {
    setCep(target.value);

    if (error) validateCep(target.value);
    if (target.value.length == 5) setCep((target.value += '-'));
  }

  function handleSubmit(event) {
    event.preventDefault();
    validateCep(cep)
      ? console.log('enviou')
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
        value={cep}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {error && <p>{error}</p>}
      <button>enviar</button>
    </form>
  );
}
