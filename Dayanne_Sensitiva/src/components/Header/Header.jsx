import { useState } from "react";
import Logo from "../../assets/Sensitiva Logo.png";

import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import elemento from "../../assets/Elemento 1.png";
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
    <section className="banner" id="Início">
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
            <a href="#Serviços" className="nav link">
              Serviços
            </a>
          </li>

          <li className="nav__item">
            <a href="#Sobre" className="nav link">
              Quem Sou
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
          <a
            href="https://www.instagram.com/sensitivadayanneoficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
          >
            <FaInstagram className="nav__icon" />
          </a>
          <a
            href="https://www.facebook.com/dayanne.ristich.7?mibextid=ZbWKwL"
            target="_blank"
          >
            {" "}
            <FaFacebook className="nav__icon" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5511967632920&text=Ol%C3%A1%20Dayanne,%0Apreciso%20da%20sua%20orienta%C3%A7%C3%A3o.%20Podemos%20agendar%20uma%20consulta%20para%20discutir%20como%20voc%C3%AA%20pode%20me%20ajudar?"
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

      <img className="elemento" src={elemento} alt="" />

      <div className="button-container">
        <a
          href="https://api.whatsapp.com/send?phone=5511967632920&text=Ol%C3%A1%20Dayanne,%0Apreciso%20da%20sua%20orienta%C3%A7%C3%A3o.%20Podemos%20agendar%20uma%20consulta%20para%20discutir%20como%20voc%C3%AA%20pode%20me%20ajudar?"
          target="_blank
         "
        >
          <button className="btn">Fale Comigo</button>
        </a>
      </div>
    </section>
  );
}

export default Header;
