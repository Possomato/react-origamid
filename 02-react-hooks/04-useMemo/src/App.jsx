import React from 'react';

export default function App() {
  const [contar, setContar] = React.useState(0)

  function operacaoLenta() {
    let c;
    for (let index = 0; index < 100000000; index++) {
      c = index + index / 10;
    }
    return c;
  }

  const t1 = performance.now()

  const valor = React.useMemo(() =>  operacaoLenta(), [ ]);
  // console.log(valor);
  console.log(performance.now() - t1)

  return (
    <div>
      <button onClick={() => setContar(contar + 1)}>
        {contar}
      </button>
    </div>
  );
}
