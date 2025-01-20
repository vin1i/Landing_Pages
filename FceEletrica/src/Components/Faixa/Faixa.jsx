import "./Faixa.css";
import { FaWhatsapp } from "react-icons/fa";

const Faixa = () => {
  return (
    <section className="section__background" id="contatos">
      <div className="section__description">
        <span className="text__description">Atendimento 24 HORAS</span>
        <a
          href="https://api.whatsapp.com/send?phone=5562994557917&text=Ol%C3%A1!%20Sou%20visitante%20do%20site%20ELETRICISTAS%20PROFISSIONAIS%20e%20estou%20interessado%20nos%20servi%C3%A7os%20el%C3%A9tricos.%20Poderia%20fornecer%20mais%20detalhes%3F
         "
          target="_blank
         "
          rel="noreferrer"
        >
          <button className="btn__faixa">
            <span className="btn__faixa-text"> Fale Conosco</span>
            <span className="btn__faixa-img-wrapper">
              <FaWhatsapp className="nav__icon-faixa" />
            </span>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Faixa;
