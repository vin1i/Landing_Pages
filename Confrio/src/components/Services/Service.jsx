import React from "react";
import Icone from "../../assets/Imagens/Icones.png";
import "./service.css";

const Service = () => {
  return (
    <section className="service__container" id="serviços">
      <h2 className="section__title">- SERVIÇOS -</h2>
      <ul className="service__list">
        <a href="#instalação">
          {" "}
          <li className="service__item">
            <img src={Icone} alt="" className="service__img" />
            INSTALAÇÃO
          </li>
        </a>
        <a href="#limpeza">
          <li className="service__item">
            <img src={Icone} alt="" className="service__img" />
            PREVENTIVA
          </li>
        </a>
        <a href="#manutenção">
          <li className="service__item">
            <img src={Icone} alt="" className="service__img" />
            MANUTENÇÃO
          </li>
        </a>
      </ul>
    </section>
  );
};

export default Service;
