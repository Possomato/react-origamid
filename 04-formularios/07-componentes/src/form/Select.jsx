import React from 'react';

export default function Select({ options, value, setValue }) {
  return (
    <select
      value={value}
      onChange={({ target }) => setValue(target.value)}
    >
      <option value="" disabled>Selecione</option>
      {options.map((option, index) => {
        return (
          <option key={index} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
}
