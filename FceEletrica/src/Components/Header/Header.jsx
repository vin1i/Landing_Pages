import { useState } from "react";
import Logo from "../../assets/CNA Eletricista Logo.png";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

import "./Header.css";

function Header() {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");

  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");

    //TogglerIcon
    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };

  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        <img src={Logo} alt="" className="logo" />
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#Início" className="nav link">
            Início
          </a>
        </li>

        <li className="nav__item">
          <a href="#Servicos" className="nav link">
            Serviços
          </a>
        </li>

        <li className="nav__item">
          <a href="#Sobre" className="nav link">
            Sobre Nós
          </a>
        </li>

        <li className="nav__item">
          <a href="#Contatos" className="nav link">
            Contato
          </a>
        </li>
      </ul>
      <div className="nav__icons">
        {" "}
        <a href="https://www.instagram.com/alexcarmocarmo" target="_blank">
          <FaInstagram className="nav__icon" />
        </a>
        <a
          href="https://www.facebook.com/fec.servisor.eletrico"
          target="_blank "
        >
          {" "}
          <FaFacebook className="nav__icon" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5562994557917&text=Ol%C3%A1!%20Sou%20visitante%20do%20site%20ELETRICISTAS%20PROFISSIONAIS%20e%20estou%20interessado%20nos%20servi%C3%A7os%20el%C3%A9tricos.%20Poderia%20fornecer%20mais%20detalhes%3F
            "
          target="_blank
            "
        >
          {" "}
          <FaWhatsapp className="nav__icon" />
        </a>
      </div>

      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Header;
