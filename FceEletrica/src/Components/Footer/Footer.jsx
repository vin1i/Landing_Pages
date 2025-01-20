import "./Footer.css";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="https://api.whatsapp.com/send?phone=5562994557917&text=Ol%C3%A1!%20Sou%20visitante%20do%20site%20ELETRICISTAS%20PROFISSIONAIS%20e%20estou%20interessado%20nos%20servi%C3%A7os%20el%C3%A9tricos.%20Poderia%20fornecer%20mais%20detalhes%3F
         "
        target="_blank
         "
        className="btn-contato-whatsapp"
      >
        {" "}
        <FaWhatsapp className="nav__icon-contato-whats" />{" "}
      </a>
      <div className="footer__container container">
        <span className="footer__copy">
          &#169;2024 - Criado e desenvolvido por{" "}
          <a href="https://produtosinovacaomkt.com.br/" target="_blank">
            Inovação Marketing
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
