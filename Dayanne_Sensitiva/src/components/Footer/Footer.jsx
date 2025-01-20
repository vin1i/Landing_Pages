import "./Footer.css";
import { FaWhatsapp } from "react-icons/fa";
// import { useState } from "react";

const Footer = () => {
  /*LÓGICA PARA ADIÇÃO DO BOTÃO NO PRÓPRIO COMPONENTE SEM USAR CSS!!!*/
  // const [isHovered, setIsHovered] = useState(false);

  // const whatsappLinkStyle = {
  //   position: "fixed",
  //   width: "54px",
  //   height: "53px",
  //   bottom: "33px",
  //   right: "29px",
  //   backgroundColor: isHovered ? "#128C7E" : "#25d366",
  //   color: "#FFF",
  //   borderRadius: "50px",
  //   textAlign: "center",
  //   fontSize: "44px",
  //   boxShadow: "1px 1px 2px #888",
  //   zIndex: "99999999",
  //   transition: "transform 0.3s ease, background-color 0.3s ease",
  //   transform: isHovered ? "scale(1.05)" : "scale(1)",
  // };

  // const whatsappIconStyle = {
  //   marginTop: "3px",
  //   width: "60%",
  // };

  return (
    <footer className="footer">
      <a
        href="https://api.whatsapp.com/send?phone=5511967632920&text=Ol%C3%A1%20Dayanne,%0Apreciso%20da%20sua%20orienta%C3%A7%C3%A3o.%20Podemos%20agendar%20uma%20consulta%20para%20discutir%20como%20voc%C3%AA%20pode%20me%20ajudar?"
        target="_blank
        "
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
      <div className="footer__container container">
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
