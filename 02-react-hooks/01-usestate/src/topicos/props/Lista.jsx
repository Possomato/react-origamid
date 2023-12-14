import React from 'react';

export default function Lista() {
  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(['item 1']);

  function handleClick() {
    setContar(contar + 1);
    setItems([...items, 'Item' + (contar + 1)]);
  }

  return (
    <div>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
}
