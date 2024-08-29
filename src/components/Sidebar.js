import React, { useState } from 'react';
import './style.css';
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo.png"

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isEsportesOpen, setIsEsportesOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleEsportes = () => {
    setIsEsportesOpen(!isEsportesOpen);
  };

  return (
    <div className="app">

      <div id='icon' className="menu-icon" onClick={toggleSidebar}>
        <GiHamburgerMenu className='icon' size={30} />
      </div>
      <div>
        <img src={logo} className='logoHeader' />
      </div>


      {isSidebarOpen && (
        <div className="sidebar">
          <ul className='nome'>
            <li><a href='/'>Home</a></li>
            <li><a href="/SobreNos">Sobre Nós</a></li>
            <li onClick={toggleEsportes}>
              <a href="#">Esportes</a>
              {isEsportesOpen && (
                <ul className="submenu">
                  <li><a href="/Futsal">Futsal</a></li>
                  <li><a href="/Volei">Vôlei</a></li>
                  <li><a href="/Basquete">Basquete</a></li>
                  <li><a href="/Tenisdemesa">Tênis de Mesa</a></li>
                  <li><a href="/Futmesa">Fut Mesa</a></li>
                  <li><a href="/Queimada">Queimada</a></li>
                  <li><a href="/Atletismo">Atletismo</a></li>
                  <li><a href="/Handebol">Handebol</a></li>
                </ul>
              )}
            </li>

          </ul>
        </div>
      )}
    </div>
  );
}

