import React from 'react';

export const ContextoGlobal = React.createContext();

export function ContextoArmazenado({ children }) {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((resposta) => resposta.json())
      .then((jsonBody) => setDados(jsonBody));
  }, []);

  function clickDeletar(){
    setDados(null)
  }

  return (
    <ContextoGlobal.Provider value={{ dados, clickDeletar }}>
      {children}
    </ContextoGlobal.Provider>
  );
}
