
// App.js
import React, { input, useState, handleSearchSubmit, searchQuery, handleSearchChange } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import Medalha from "./components//medalhas/Medalha.js";
import logoSesi from "./assets/SESI.png"
import imgSesi from "./assets/imgSesi.png"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Volei from './pages/Volei.js';
import Futsal from './pages/futsal.js';
import Basquete from './pages/basquete.js';
import Futmesa from './pages/futmesa.js';
import Tenisdemesa from './pages/tenisdemesa.js';
import Atletismo from './pages/atletismo.js';
import Handebol from './pages/handbal.js'
import Queimada from './pages/queimada.js'
import Carrossel from './components/medalhas/carrossel.js'
import Home from './pages/Home.js';
import SobreNos from './pages/sobrenos.js';


export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/futsal" element={<Futsal />} />
          <Route path="/volei" element={<Volei />} />
          <Route path="/basquete" element={<Basquete />} />
          <Route path="/tenisdemesa" element={<Tenisdemesa />} />
          <Route path="/futmesa" element={<Futmesa />} />
          <Route path="/queimada" element={<Queimada />} />
          <Route path="/atletismo" element={<Atletismo />} />
          <Route path="/handebol" element={<Handebol />} />
        </Routes>
      </div>
    </Router>
  );
}








