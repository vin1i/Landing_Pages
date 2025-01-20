import { FaWhatsapp } from "react-icons/fa";
import Logo from "../../assets/Imagens/Com Frio Logo.png";

import Logotoggle from "../../assets/Imagens/LogoTOGGLE.png";

import "./header.css";

const Header = () => {
  return (
    <header className="header__container">
      <nav className="nav-bar">
        <div className="logo">
          <h1 className="logo-img-container">
            <img src={Logo} alt="" className="logo-img" />
            <img src={Logotoggle} alt="" className="logotoggle-img" />
          </h1>
        </div>

        <div className="nav-list">
          <ul>
            <li className="nav-item">
              <a href="#serviços" className="nav-link">
                Serviços
              </a>
            </li>
            <li className="nav-item">
              <a href="#sobre" className="nav-link">
                Quem Somos
              </a>
            </li>
            <li className="nav-item">
              <a href="#contatos" className="nav-link">
                Contatos
              </a>
            </li>
          </ul>
        </div>
        <div className="tel-button">
          <button>
            <a
              href="https://api.whatsapp.com/send?phone=5585998143115&amp;text=Olá,%20vi%20o%20anúncio%20do%20seu%20site%20e%20preciso%20da%20sua%20ajuda!!"
              target="_blank"
              rel="noreferrer"
            >
              85 99814-3115 <FaWhatsapp className="nav__icon-header" />
            </a>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
