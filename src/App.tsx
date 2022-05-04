import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import './App.css';
import Footer from './components/estaticos/footer/Footer';
import SobreNos from './paginas/sobreNos/SobreNos';

function App() {
  return (

    <Router>
      <div style={{minHeight: '100vh'}}>
        <Routes>
          <Route path="/" element={<Home />}/>

          <Route path="/home" element={<Home />}/>

          <Route path="/login" element={<Login />} />

          <Route path='/cadastro' element={<CadastroUsuario/>}/>

          <Route path='/sobrenos' element={<SobreNos/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
