import React, { useState, useEffect } from 'react';
import './carrossel.css';
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
// Importe suas imagens
import imgVolei from '../../assets/imgVolei.png';
import basquete from '../../assets/basquete.png';
import tenisMesa from '../../assets/tenisMesa.png';
import futMesa from '../../assets/futMesa.png';
import Sidebar from '../Sidebar'
import Medalha from '../medalhas/Medalha'
import primeiro from '../../assets/ouro.png'
import segundo from '../../assets/prata.png'
import terceiro from '../../assets/bronze.png'
import angola from '../../assets/angola.png'
import republica from '../../assets/republica.png'
import brasil from '../../assets/brasil.png'

const Carrossel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [imgVolei, basquete, tenisMesa, futMesa];
  const textos = ["VÔLEI", "BASQUETE", "TÊNIS DE MESA", "FUTMESA"];
  const descricao = ["Parabéns, campeões! Não importa o resultado, vocês já conquistaram nossa profunda admiração e respeito.",
    "O esporte esta na alma, nasce na alma, é por isso que não existe idade para iniciar e nem terminar.",
    "A dor apenas dói, já esta doendo. Então continue com seu objetivo mesmo com dor, nunca desista por causa dela",
    "Nem sempre teremos os melhores lugares para treinar. Mas treinaremos em qualquer lugar, para sermos melhores."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Muda a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, [images.length]);

  return (
    <div className="App">
      <Sidebar />
      <div className="carrossel">
        <div className="carrossel-item">
          {images.length > 0 && (
            <>

              <img src={images[currentIndex]} alt="Esporte" className="carrossel-image" />
              <div className="carrossel-texto">
                <h2 className='titulo-carrossel'>{textos[currentIndex]}</h2>
                <p className='descricao-carrossel'>{descricao[currentIndex]}</p>
              </div>
            </>
          )}
        </div>


        <h1 className='pd'>Podio</h1>
        <div className="podio">
        
          <Medalha className='meda' />

          <div className='podios'>

            <div className="position third">
              <div className="country"><img src={brasil} className='pais' /></div>
              <span><img src={terceiro} /></span>
            </div>

            <div className="position first">
              <div className="country"><img src={angola} className='pais' /></div>
              <span><img src={primeiro} /></span>
            </div>
            <div className="position second">
              <div className="country"><img src={republica} className='pais' /></div>
              <span><img src={segundo} /></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Carrossel;
