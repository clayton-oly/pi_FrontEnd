import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';

import './App.css';

function App() {
  return (

    <Router>

      <Routes>
        <Route path="/" element={<Home />}/>

        <Route path="/home" element={<Home />}/>

        <Route path="/login" element={<Login />} />
      </Routes>
      
    </Router>
  );
}

export default App;
