import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Footer from './components/estaticos/footer/Footer';
import SobreNos from './paginas/sobreNos/SobreNos';
import ListarProduto from './components/produtos/listarProduto/ListarProduto';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './store/store';
import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria';
import CadastroCategoria from './components/categorias/cadastroCategoria/CadastroCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import CadastraProduto from './components/produtos/cadastrarProduto/CadastrarProduto';
import DeletaProduto from './components/produtos/deletarProduto/DeletarProduto';
import Navbar from './components/estaticos/navbar/Navbar';
import Cart from './components/cart/Cart';

function App() {

  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
           
            <Route path="/" element={<Home  />} />

            <Route path="/home" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path='/cadastro' element={<CadastroUsuario />} />

            <Route path='/sobrenos' element={<SobreNos />} />

            <Route path="/categorias" element={<ListaCategoria />} />

            <Route path="/produtos" element={<ListarProduto />} />

            <Route path="/formularioCategoria" element={<CadastroCategoria />} />

            <Route path="/formularioCategoria/:id" element={<CadastroCategoria />} />

            <Route path="/formularioProduto" element={<CadastraProduto />} />

            <Route path="/formularioProduto/:id" element={<CadastraProduto />} />

            <Route path="/deletarProduto/:id" element={<DeletaProduto />} />

            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />

            <Route path="/cart/:id" element={<Cart />} />

          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
