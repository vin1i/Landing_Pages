import "./Contact.css";
import BannerContact from "../../assets/img/VBBORGES7.png";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="card__container-contact" id="Contato">
      <div className="card__contact">
        <div className="contact__image">
          <img src={BannerContact} alt="" className="banner-img" />
        </div>
        <div className="information-contact">
          <h1 className="title__contact">Contato</h1>
          <p className="adress-p">
            <i className="uil uil-location-point"></i> Estrada Municipal Antônio
            Frederico Ozanam - Jardim Santa Hermínia - São José dos Campos, SP -
            CEP 12226-830
          </p>
          <div className="email-container">
            {" "}
            <span className="email-label">
              {" "}
              <span className="icon-mail-container"> </span>
              <a href="mailto:vbvidrosborges@yahoo.com" className="email">
                {" "}
                <i className="bx bx-envelope icon-mail "></i>{" "}
                vbvidrosborges@yahoo.com
              </a>
            </span>{" "}
          </div>
          <h3 className="phone font-bold">
            <a
              href="https://api.whatsapp.com/send?phone=5512988774324&text=Ol%C3%A1%20Vidra%C3%A7aria%20Borges!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20oferecidos%20e%20obter%20um%20or%C3%A7amento.%20Podem%20me%20ajudar?"
              target="_blank"
            >
              {" "}
              <i className="uil uil-phone-alt"></i> 12 988774324
            </a>
          </h3>
          <h3 className="font-bold">
            {" "}
            <i className="uil uil-file-shield-alt "></i> CNPJ: 35586946/0001-66
          </h3>{" "}
          <h3 className="font-bold">
            {" "}
            <i className="uil uil-file-edit-alt"></i> Vidros Esquadrias Borges
          </h3>
          <button className="btn__contact">
            {" "}
            <a
              href="https://api.whatsapp.com/send?phone=5512988774324&text=Ol%C3%A1%20Vidra%C3%A7aria%20Borges!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20oferecidos%20e%20obter%20um%20or%C3%A7amento.%20Podem%20me%20ajudar?"
              target="_blank"
              className="link__contact"
            >
              Fale Conosco
            </a>
          </button>{" "}
          <div className="icons-contact">
            <a
              href="https://www.instagram.com/vbvidrosborges?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
            >
              {" "}
              <FaInstagram className="nav__icon-contact" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5512988774324&text=Ol%C3%A1%20Vidra%C3%A7aria%20Borges!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20oferecidos%20e%20obter%20um%20or%C3%A7amento.%20Podem%20me%20ajudar?"
              target="_blank"
            >
              {" "}
              <FaWhatsapp className="nav__icon-contact" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
