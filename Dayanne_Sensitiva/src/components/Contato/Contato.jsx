import "./Contato.css";
import BannerContato from "../../assets/Elemento 03.jpg";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Contato = () => {
  return (
    <section className="card__container-contato" id="Contatos">
      <div className="card__contato">
        <div className="contato__image">
          <img src={BannerContato} alt="" className="banner-img" />
        </div>
        <div className="information-contato">
          <h1 className="title__contato">Contato</h1>
          <p className="adress-p">
            Av. Itaberaba, 1302 - Sala 2 - Freguesia do O Zona Norte São Paulo
          </p>
          <div className="email-container">
            <span className="email-label">E-mail: </span>
            <a href="mailto:dayanneristich4@gmail.com" className="email">
              dayanneristich4@gmail.com
            </a>
          </div>
          <h3>11 96763-2920</h3>
          <button className="btn__contato">
            {" "}
            <a
              href="https://api.whatsapp.com/send?phone=5511967632920&text=Ol%C3%A1%20Dayanne,%0Apreciso%20da%20sua%20orienta%C3%A7%C3%A3o.%20Podemos%20agendar%20uma%20consulta%20para%20discutir%20como%20voc%C3%AA%20pode%20me%20ajudar?"
              target="_blank
            "
              className="link__contato"
            >
              Fale Comigo
            </a>
          </button>{" "}
          <div>
            <a
              href="https://www.instagram.com/sensitivadayanneoficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
            >
              {" "}
              <FaInstagram className="nav__icon-contato" />
            </a>
            <a
              href="https://www.facebook.com/dayanne.ristich.7?mibextid=ZbWKwL"
              target="_blank "
            >
              {" "}
              <FaFacebook className="nav__icon-contato" />
            </a>
          </div>
        </div>
      </div>

      {/* Adicione mais cards aqui conforme necessário */}
    </section>
  );
};
export default Contato;
