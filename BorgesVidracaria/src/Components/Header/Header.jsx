import { useState } from "react";
import Logo from "../../assets/img/VB BORGES Logo.png";

import { FaInstagram, FaWhatsapp /*FaFacebook*/ } from "react-icons/fa";

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

  const closeMenu = () => {
    setActive("nav__menu");
    setToggleIcon("nav__toggler");
  };

  return (
    <header className="banner" id="Início">
      <nav className="nav">
        <a href="#" className="nav__brand">
          <img src={Logo} alt="" className="logo" />
        </a>
        <ul className={active}>
          <li className="nav__item">
            <a href="#Início" className="nav link" onClick={closeMenu}>
              Início
            </a>
          </li>

          <li className="nav__item">
            <a href="#Sobre" className="nav link" onClick={closeMenu}>
              Sobre
            </a>
          </li>

          <li className="nav__item">
            <a href="#Serviços" className="nav link" onClick={closeMenu}>
              Serviços
            </a>
          </li>

          <li className="nav__item">
            <a href="#Contato" className="nav link" onClick={closeMenu}>
              Contato
            </a>
          </li>
        </ul>
        <div className="nav__icons">
          {" "}
          <a
            href="https://www.instagram.com/vbvidrosborges?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
          >
            <FaInstagram className="nav__icon" />
          </a>
          {/* <a
            href="https://www.facebook.com/dayanne.ristich.7?mibextid=ZbWKwL"
            target="_blank"
          >
            {" "}
            <FaFacebook className="nav__icon" />
          </a> */}
          <a
            href="https://api.whatsapp.com/send?phone=5512988774324&text=Ol%C3%A1%20Vidra%C3%A7aria%20Borges!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20oferecidos%20e%20obter%20um%20or%C3%A7amento.%20Podem%20me%20ajudar?"
            target="_blank"
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

      {/* <img className="elemento" src={elemento} alt="" /> */}

      <div className="button-container">
        <a
          href="https://api.whatsapp.com/send?phone=5512988774324&text=Ol%C3%A1%20Vidra%C3%A7aria%20Borges!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20oferecidos%20e%20obter%20um%20or%C3%A7amento.%20Podem%20me%20ajudar?"
          target="_blank"
        >
          <button className="btn">Fale Conosco</button>
        </a>
      </div>
    </header>
  );
}

export default Header;
