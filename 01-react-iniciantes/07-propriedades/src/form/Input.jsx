import React from 'react';

const Input = ({ label, id, ...rest }) => {
  return (
    <div style={{ margin: '1rem 0' }}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest}/>
    </div>
  );
};

export default Input;
