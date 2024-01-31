import React from 'react';

export default function Desafio() {
  const [cores, setCores] = React.useState(['azul']);

  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

  function handleChange({ target }) {
    target.checked
      ? setCores([...cores, target.value])
      : setCores(cores.filter((cor) => cor !== target.value));
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <div>
      <h1>Desafio</h1>
      <form>
        {coresArray.map((cor) => {
          return (
            <label key={cor}>
              <input
                type="checkbox"
                value={cor}
                checked={cores.includes(cor)}
                onChange={handleChange}
              />
              {cor}
            </label>
          );
        })}
      </form>
    </div>
  );
}
