import React from 'react';

export default function Input({ id, label, setValue, ...props }) {
  function handleChange({ target }) {
    setValue(target.value);
  }

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
}
