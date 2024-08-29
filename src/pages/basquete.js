import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import basquete from "../assets/basquete.png"
import logo from "../assets/logo.png"
import Medalha from ".././components/medalhas/Medalha"
import './esportes.css';
import SemiFinal from "../components/chave-grupo/chavedoVolei";



function Basquete() {
  return (
    <>
      <Sidebar/>

      <div className="container">
        <img src={basquete} className="imgVolei" />
        <h1>BASQUETE</h1>
        <p>O esporte esta na alma, nasce na alma, é por isso que não existe idade para iniciar e nem terminar.</p>

      </div>

      <div className="tabela">
        <img src={logo} />
        <h1>InterSESI</h1>

      </div>
      <div className="tabelas">
        <div className="pai">
          <div className="title">
            <h2>Classficação</h2>
            <h3>Interclasse - 2024</h3>

          </div>
          <div className="medalha">
            <Medalha />

          </div>

        </div>
        <SemiFinal className="semi" />
      </div>

    </>
  );
}

export default Basquete;