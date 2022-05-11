import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import './App.css';
import Footer from './components/estaticos/footer/Footer';
import SobreNos from './paginas/sobreNos/SobreNos';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';
import CadastrarProduto from './components/produtos/cadastrarProduto/CadastrarProduto';
import ListarProduto from './components/produtos/listarProduto/ListarProduto';

function App() {
  return (

    <Router>
      <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/home" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path='/cadastro' element={<CadastroUsuario />} />

          <Route path='/sobrenos' element={<SobreNos />} />

          <Route path="/formularioProduto" element={<CadastrarProduto />} />

          <Route path="/formularioProduto/:id" element={<CadastrarProduto />} />

          <Route path="/produtos" element={<ListarProduto />} />

          <Route path="/deletarProduto/:id" element={<DeletarProduto />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
