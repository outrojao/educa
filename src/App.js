import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

import Login from '../src/components/pages/Login'
import Cadastro from './components/pages/Cadastro';
import Home from './components/pages/Home';
import Materiais from './components/pages/Materiais'
import Perfil from './components/pages/Perfil'
import Sobre from './components/pages/Sobre'

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route path='/home/:name' element={<Home/>}/>
            <Route path='/cadastrar' element={<Cadastro/>}/>
            <Route path='/materiais' element={<Materiais/>} />
            <Route path='/perfil/:name' element={<Perfil/>} />
            <Route path='/sobre' element={<Sobre/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
