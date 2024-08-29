import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import queimada from "../assets/queimada.png"
import logo from "../assets/logo.png"
import Medalha from ".././components/medalhas/Medalha"
import './esportes.css';
import SemiFinal from "../components/chave-grupo/chavedoVolei";



function Queimada() {
  return (
    <>
      <Sidebar/>

      <div className="container">
        <img src={queimada} className="imgVolei" />
        <h1>QUEIMADA</h1>
        <p>A brincadeira de gente grande esta em fazer atividade fisica e ver o impacto que vai dando na vida e no corpo.</p>

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

export default Queimada;