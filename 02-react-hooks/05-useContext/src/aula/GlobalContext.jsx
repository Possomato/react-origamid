import React from 'react';

export const GlobalContext = React.createContext();

export function GlobalStorage({ children }) {
  const [contar, setContar] = React.useState(0)

  function handleClick(){
    setContar(contar + 1)
  }

  return (
    <GlobalContext.Provider value={{ contar, handleClick }}>
      {children}
    </GlobalContext.Provider>
  );
}
