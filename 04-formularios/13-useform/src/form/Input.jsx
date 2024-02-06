import React from 'react';

export default function Input({
  id,
  label,
  onChange,
  value,
  type,
  onBlur,
  placeholder,
  error,
}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        value={value}
      />
      {error && <p>{error}</p>}
    </div>
  );
}
