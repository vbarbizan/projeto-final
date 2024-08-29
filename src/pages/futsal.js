import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import futsal from "../assets/futsal.png"
import logo from "../assets/logo.png"
import Medalha from ".././components/medalhas/Medalha"
import './esportes.css';
import SemiFinal from "../components/chave-grupo/chavedoVolei";



function Futsal() {
  return (
    <>
      <Sidebar/>

      <div className="container">
        <img src={futsal} className="imgVolei" />
        <h1>FUTSAL</h1>
        <p>A verdadeira vitória está em concluir cada desafio com um coração pleno, satisfeito pela jornada e orgulhoso da trajetória.</p>

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

export default Futsal;