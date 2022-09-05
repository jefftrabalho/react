import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';



import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import ListaTema from './components/temas/listatema/ListaTema';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh'}}>
        <Routes>
          <Route  path="/" element= { <Login />} />
          <Route  path="/login" element= { <Login />} />
          <Route  path="/home" element= { <Home />} />
          <Route path="/cadastrousuario" element = {<CadastroUsuario />} />
          <Route path="/temas" element = {<ListaTema />} />
          <Route path="/posts" element = {<ListaPostagem />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
