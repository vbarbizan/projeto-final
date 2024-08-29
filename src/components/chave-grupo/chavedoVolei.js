import React from 'react';
import './chave.css';
import czechRepublic from '../../assets/republica.png';
import germany from '../../assets/alemanha.png';
import brasil from '../../assets/brasil.png'
import inglaterra from '../../assets/inglaterra.png'

const SemiFinal = () => {
  return (
    <div>
      <h1 className='jogos'>Jogos</h1>
      <div className='container-semi'>
        
    <div className="semi-final-container">
      <h2 className="semi-final-title">SEMI-FINAL</h2>
      <div className="semi-final-details">
        <span className="match-info">INTERCLASSE - ONTEM</span>
        <span className="match-status">ENCERRADO</span>
      </div>
      <div className="semi-final-match">
        <div className="team">
          <img src={czechRepublic} alt="República Tcheca" className="team-flag" />
          <span className="team-name">REP.TCH</span>
        </div>
        <span className="score">2</span>
        <span className="versus">X</span>
        <span className="score">0</span>
        <div className="team">
          <img src={germany} alt="Alemanha" className="team-flag" />
          <span className="team-name">ALEMANHA</span>
        </div>
      </div>
    </div>


<div className="semi-final-container1">
      <h2 className="semi-final-title">SEMI-FINAL</h2>
      <div className="semi-final-details">
        <span className="match-info">INTERCLASSE - ONTEM</span>
        <span className="match-status">ENCERRADO</span>
      </div>
      <div className="semi-final-match">
        <div className="team">
          <img src={brasil} alt="República Tcheca" className="team-flag" />
          <span className="team-name">Brasil</span>
        </div>
        <span className="score">1</span>
        <span className="versus">X</span>
        <span className="score">0</span>
        <div className="team">
          <img src={inglaterra} alt="Alemanha" className="team-flag" />
          <span className="team-name">Inglaterra</span>
        </div>
      </div>
    </div>
    </div>
    

<div className="semi-final-container">
<h2 className="semi-final-title">FINAL</h2>
<div className="semi-final-details">
  <span className="match-info">INTERCLASSE - ONTEM</span>
  <span className="match-status1">Ao Vivo</span>
</div>
<div className="semi-final-match">
  <div className="team">
    <img src={brasil} alt="República Tcheca" className="team-flag" />
    <span className="team-name">REP.TCH</span>
  </div>
  <span className="score">1</span>
  <span className="versus">X</span>
  <span className="score">3</span>
  <div className="team">
    <img src={czechRepublic} alt="Alemanha" className="team-flag" />
    <span className="team-name">ALEMANHA</span>
  </div>
</div>
</div>

</div>
  );
};

export default SemiFinal;
