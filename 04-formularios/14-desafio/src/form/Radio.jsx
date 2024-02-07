import React from 'react';

export default function Radio({
  pergunta,
  options,
  onChange,
  id,
  value,
  active,
}) {
  if (active == false) return null
  return (
    <fieldset>
      <legend>{pergunta}</legend>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            onChange={onChange}
            id={id}
            checked={value === option}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
}
