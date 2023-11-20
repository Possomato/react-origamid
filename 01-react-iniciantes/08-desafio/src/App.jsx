import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Produtos from './pages/Produtos';

let caminhoDaURL = window.location.pathname;

function createSection(url) {
  if (url === '/') {
    return <Home />;
  } else if (url === '/Produtos') {
    return <Produtos />;
  }
}

const App = () => {
  const section = createSection(caminhoDaURL);

  return (
    <>
      <Header nameOne="Home" nameTwo="Produtos" />
      <section>{section}</section>
    </>
  );
};

export default App;
