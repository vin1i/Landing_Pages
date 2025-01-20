import "./footer.css";
import { FaWhatsapp } from "react-icons/fa";
import contactimg from "../../assets/Imagens/Contatos.png";
import secondImage from "../../assets/Imagens/Contatos 2.png";
import instagram from "../../assets/Imagens/Icone insta.png";
import linha from "../../assets/Imagens/linha elemento.png";

const Footer = () => {
  const whatsappLinkStyle = {
    position: "fixed",
    width: "54px",
    height: "53px",
    bottom: "33px",
    right: "29px",
    backgroundColor: "#25d366",
    color: "#FFF",
    borderRadius: "50px",
    textAlign: "center",
    fontSize: "44px",
    boxShadow: "1px 1px 2px #888",
    zIndex: "99999999",
  };

  const whatsappIconStyle = {
    marginTop: "3px",
    width: "65%",
  };

  return (
    <div className="footer-container">
      <div className="image-wrapper">
        <img src={contactimg} alt="" className="image" />
        <img src={secondImage} alt="" className="image" />
      </div>
      <div className="overlay-text">
        <span>Atendemos Residência e Comércio</span>
      </div>
      <div className="footer-info">
        <div className="footer-info-div">
          <strong className="contacts-header">
            Contatos
            <span className="line-image">
              <img src={linha} alt="" />
            </span>
          </strong>
          <p>
            <span>Whatsapp:</span> 85 99814-3115
          </p>
          <p>
            <span>Endereço:</span> Rua 541, 182 A - Conj. Ceará II, Fortaleza -
            CE
          </p>{" "}
          <a
            href="https://www.instagram.com/confrio_refrigeracao_"
            className="instagram-link-a"
            target="_blank"
            rel="noreferrer"
          >
            <p className="instagram-link">
              <img
                src={instagram}
                alt=""
                className="btn__contact-img-instagram"
                style={{ marginRight: "8px" }}
              />
              /confrio_refrigeracao_
            </p>
          </a>
        </div>{" "}
        <a
          href="https://api.whatsapp.com/send?phone=5585998143115&amp;text=Olá,%20vi%20o%20anúncio%20do%20seu%20site%20e%20preciso%20da%20sua%20ajuda!!"
          style={whatsappLinkStyle}
          target="_blank"
          className="btn-footer-whatsapp"
          rel="noreferrer"
        >
          {" "}
          <FaWhatsapp className="nav__icon-footer-whats" />{" "}
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5585998143115&amp;text=Olá,%20vi%20o%20anúncio%20do%20seu%20site%20e%20preciso%20da%20sua%20ajuda!!"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn__contact-footer">
            <span className="btn__contact-text-footer"> Fale Conosco!</span>
            <span className="btn__contact-img-wrapper">
              <FaWhatsapp className="nav__icon-footer" />
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Footer;
