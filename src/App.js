import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

import Login from '../src/components/pages/Login'
import Cadastro from './components/pages/Cadastro';
import Home from './components/pages/Home';


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/cadastrar' element={<Cadastro/>}/>
            {/* <Route path='/materias' element={<Materias/>} />
            <Route path='/perfil' element={<Perfil/>} />
            <Route path='/sobre' element={<Sobre/>} /> */}
          </Routes>
      </Router>
    </div>
  );
}

export default App;
