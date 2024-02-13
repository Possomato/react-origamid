import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produtos from './components/Produtos';
import Produto from './components/Produto';
import Contato from './components/Contato';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="/produto/:id" element={<Produto />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
