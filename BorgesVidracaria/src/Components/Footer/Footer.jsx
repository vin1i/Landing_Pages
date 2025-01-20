import "./Footer.css";
import { FaWhatsapp } from "react-icons/fa";
// import { useState } from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="https://api.whatsapp.com/send?phone=5512988774324&text=Ol%C3%A1%20Vidra%C3%A7aria%20Borges!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20oferecidos%20e%20obter%20um%20or%C3%A7amento.%20Podem%20me%20ajudar?"
        target="_blank"
        // style={whatsappLinkStyle}

        className="btn-contato-whatsapp"
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
      >
        {" "}
        <FaWhatsapp
          className="nav__icon-contato-whats"
          // style={whatsappIconStyle}
        />{" "}
      </a>
      <div className="footer__container ">
        <span className="footer__copy">
          &#169;2024 - Criado e desenvolvido por{" "}
          <a
            href="https://produtosinovacaomkt.com.br/"
            target="_blank"
            className="name__inovacao"
          >
            Inovação Marketing
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
