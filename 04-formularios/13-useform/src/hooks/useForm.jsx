import React from 'react';

export default function useForm(type) {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  const types = {
    cep: {
      regex: /^\d{5}-?\d{3}$/,
      message: 'CEP inválido',
    },
    email: {
      regex : /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'e-mail inválido'
    }
  };

  function validate(value) {
    if (value.length == 0) {
      setError('preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    setValue(target.value)
    if (error) validate(target.value);


    if (type === 'cep') {
      const formattedValue = target.value.replace(/[^\d]/g, '');

      if (formattedValue.length <= 5) {
        setValue(formattedValue);
      } else if (formattedValue.length <= 8) {
        setValue(formattedValue.replace(/(\d{5})(\d{0,3})/, '$1-$2'));
      }
    }
  }

  return {
    value,
    setValue,
    onChange,
    error,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
}
