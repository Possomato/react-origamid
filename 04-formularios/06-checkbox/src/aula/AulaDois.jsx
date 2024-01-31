import React from 'react';

export default function AulaDois() {
  const [cores, setCores] = React.useState(['azul']);

  function handleChange({target}){
    target.checked
      ? setCores([...cores, target.value])
      : setCores(cores.filter(cor => cor !== target.value ))
  }

  return (
    <div>
      <form>
        <label>
          <input
            type="checkbox"
            value="vermelho"
            checked={cores.includes('vermelho')}
            onChange={handleChange}
          />
          Vermelho
        </label>
        <label>
          <input
            type="checkbox"
            value="azul"
            checked={cores.includes('azul')}
            onChange={handleChange}
          />
          Azul
        </label>
      </form>
    </div>
  );
}
