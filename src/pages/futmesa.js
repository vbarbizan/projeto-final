import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import futmesaImg from "../assets/futMesa.png"
import logo from "../assets/logo.png"
import Medalha from "../components/medalhas/Medalha"
import './esportes.css';
import SemiFinal from "../components/chave-grupo/chavedoVolei";


function futmesa() {
  return (
    <>
      <Sidebar/>

      <div className="container">
        <img src={futmesaImg} className="imgVolei" />
        <h1>FUTMESA</h1>
        <p>Nem sempre teremos os melhores lugares para treinar. Mas treinaremos em qualquer lugar, para sermos melhores.</p>

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

export default futmesa;