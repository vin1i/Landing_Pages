import "./Contato.css";
import BannerContato from "../../assets/maintenance-repair-works-renovation-concept.jpg";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
const Contato = () => {
  return (
    <section className="card__container-contato" id="Contatos">
      <div className="card__contato">
        <div className="contato__image">
          <img src={BannerContato} alt="" className="banner-img" />
        </div>
        <div className="information-contato">
          <h1>APARECIDA DE GOIÂNIA</h1>
          <h3 className="h3_description">
            Precisa de eletricista ou eletrotécnico? É só chamar, não fique sem
            energia!
          </h3>
          <h3 className="h3_number">
            62 99455-7917
            {/* <FaWhatsapp
              className="icon_whats"
              style={{ marginLeft: "5px" }}
            />{" "} */}
          </h3>
          <h3 className="h3_number">
            62 99166-1632
            {/* <FaWhatsapp className="icon_whats" style={{ marginLeft: "5px" }}/> */}
          </h3>
          <a href="mailto:55carmocarmo@gmail.com" className="email">
            55carmocarmo@gmail.com
          </a>
          <button className="whatsapp-button">
            {/*  Este button está sendo estilizado no arquivo Services.css */}
            <a
              href="https://api.whatsapp.com/send?phone=5562994557917&text=Ol%C3%A1!%20Sou%20visitante%20do%20site%20ELETRICISTAS%20PROFISSIONAIS%20e%20estou%20interessado%20nos%20servi%C3%A7os%20el%C3%A9tricos.%20Poderia%20fornecer%20mais%20detalhes%3F
            "
              target="_blank
            "
            >
              FALE CONOSCO <FaWhatsapp className="icon_whats" />
            </a>
          </button>

          <div>
            <a href="https://www.instagram.com/alexcarmocarmo" target="_blank">
              {" "}
              <FaInstagram className="nav__icon-contato" />
            </a>
            <a
              href="https://www.facebook.com/fec.servisor.eletrico"
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
