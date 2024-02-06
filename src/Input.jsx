import React from 'react';

export default function Input({ id, label, onChange, ...props }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}
