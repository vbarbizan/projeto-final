import React from 'react';
import './style.css';
import brasil from "../../assets/brasil.png";
import czechRepublic from "../../assets/republica.png";
import england from "../../assets/inglaterra.png";
import germany from "../../assets/alemanha.png";
import angola from "../../assets/angola.png";
import italy from "../../assets/italia.png";
import belgium from "../../assets/belgica.png";
import canada from "../../assets/canada.png";

const PontuacaoTabela = () => {
  return (
    <div>
      <div>
        
      </div>
   
    <table className="tabela-pontuacao">
      <thead>
        <tr>
          <th>Países</th>
          <th>Pts</th>
          <th>V</th>
          <th>E</th>
          <th>D</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={czechRepublic} alt="República Tcheca" className="bandeira" />
          </td>
          <td>21</td>
          <td>7</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>
            <img src={brasil} alt="Brasil" className="bandeira" />
          </td>
          <td>18</td>
          <td>6</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>
            <img src={england} alt="Inglaterra" className="bandeira" />
          </td>
          <td>18</td>
          <td>6</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>
            <img src={germany} alt="Alemanha" className="bandeira" />
          </td>
          <td>15</td>
          <td>5</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>
            <img src={angola} alt="Angola" className="bandeira" />
          </td>
          <td>15</td>
          <td>5</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>
            <img src={italy} alt="Itália" className="bandeira" />
          </td>
          <td>12</td>
          <td>4</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>
            <img src={belgium} alt="Bélgica" className="bandeira" />
          </td>
          <td>12</td>
          <td>4</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>
            <img src={canada} alt="Canadá" className="bandeira" />
          </td>
          <td>9</td>
          <td>3</td>
          <td>0</td>
          <td>0</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};

export default PontuacaoTabela;
