import React from 'react';

export default function Aula1() {
  const [comentarios, setComentarios] = React.useState(['teste', 'teste4']);
  const [input, setInput] = React.useState('');
  const inputElement = React.useRef()

  function handleClick(){
    setComentarios([...comentarios, input])
    setInput('')
    inputElement.current.focus()
  }

  return (
    <div>
      <h2>Aula 01</h2>
      <ul>
        {comentarios.map((comentario, index) => (
          <li key={index}>{comentario}</li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        ref={inputElement}
        onChange={({ target }) => setInput(target.value)}
      />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
}
