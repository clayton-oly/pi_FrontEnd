import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Footer from './components/estaticos/footer/Footer'
import Navbar from './components/estaticos/navbar/Navbar'
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      
        <Route path="/" element={<Home />}/>

        <Route path="/login" element={<Login />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
