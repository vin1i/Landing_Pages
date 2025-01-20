import React from "react";
import "./contact.css";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="section__background" id="contatos">
      <div className="section__description">
        <span className="text__description">
          TRABALHAMOS COM TODOS OS MODELOS DE{" "}
          <b className="btn__bold">AR CONDICIONADOS</b>
        </span>
        <a
          href="https://api.whatsapp.com/send?phone=5585998143115&amp;text=Olá,%20vi%20o%20anúncio%20do%20seu%20site%20e%20preciso%20da%20sua%20ajuda!!"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn__contact">
            <span className="btn__contact-text"> Fale Conosco!</span>
            <span className="btn__contact-img-wrapper">
              <FaWhatsapp className="nav__icon-contact" />
            </span>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
