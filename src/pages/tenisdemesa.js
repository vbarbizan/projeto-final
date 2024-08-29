import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import tenisdemesaImg from "../assets/tenisMesa.png"
import logo from "../assets/logo.png"
import Medalha from ".././components/medalhas/Medalha"
import './esportes.css';
import SemiFinal from "../components/chave-grupo/chavedoVolei";



function tenisdemesa() {
  return (
    <>
      <Sidebar/>

      <div className="container">
        <img src={tenisdemesaImg} className="imgVolei" />
        <h1>TÊNIS DE MESA</h1>
        <p>A dor apenas dói, já esta doendo. Então continue com seu objetivo mesmo com dor, nunca desista por causa dela</p>

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

export default tenisdemesa;