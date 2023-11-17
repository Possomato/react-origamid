import React from 'react';
import Form from './form/Form';

function Titulo({ cor, texto, children }) {
  return (
    <h1 style={{ color: cor }}>
      {texto}, {children}
    </h1>
  );
}

const App = () => {
  return (
    <>
      <Titulo cor="red" texto="Meu título 1">
        isso é o children
      </Titulo>
      <Titulo cor="blue" texto="Meu título 2" />

      <Form />
    </>
  );
};

export default App;
