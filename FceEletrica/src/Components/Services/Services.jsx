import "./Services.css";
import imagem1 from "../../assets/CNA Eletricista imagem 1.jpg";
import imagem2 from "../../assets/CNA Eletricista imagem 2.jpg";
import imagem3 from "../../assets/CNA Eletricista imagem 3.jpg";
import imagem4 from "../../assets/CNA Eletricista imagem 4.jpg";
import imagem5 from "../../assets/CNA Eletricista imagem 5.jpg";
import imagem6 from "../../assets/CNA Eletricista imagem 6.jpg";
import { FaWhatsapp } from "react-icons/fa";

const servicosData = [
  {
    imgSrc: imagem1,
    description: "Troca de disjuntores trifásico",
  },
  {
    imgSrc: imagem2,
    description:
      "Montagem infraestruturais de salas CCM e instalação de painéis",
  },
  {
    imgSrc: imagem3,
    description: "Instalação de rede solar e usinas fotovoltaico",
  },
  {
    imgSrc: imagem4,
    description: "Fazemos manutenção industrial em painéis",
  },
  {
    imgSrc: imagem5,
    description: "Montagem de leitos de 600 para cabeamento de força",
  },
  {
    imgSrc: imagem6,
    description: "Instalação, montagem de painéis e manutenção industrial",
  },
];
const Servicos = () => {
  return (
    <section className="servicos-container" id="Servicos">
      <h2 className="servicos-title">
        Nossos <span className="highlight">Serviços</span>
      </h2>
      <div className="servicos-grid">
        {servicosData.map((servico, index) => (
          <div className="servico-item" key={index}>
            <img
              src={servico.imgSrc}
              alt={`Servico ${index + 1}`}
              className="servico-image"
            />
            <p className="servico-description">{servico.description}</p>
          </div>
        ))}
      </div>
      <div className="container_btn">
        <button className="whatsapp-button">
          <a
            href="https://api.whatsapp.com/send?phone=5562994557917&text=Ol%C3%A1!%20Sou%20visitante%20do%20site%20ELETRICISTAS%20PROFISSIONAIS%20e%20estou%20interessado%20nos%20servi%C3%A7os%20el%C3%A9tricos.%20Poderia%20fornecer%20mais%20detalhes%3F
            "
            target="_blank
            "
          >
            FALE CONOSCO <FaWhatsapp className="icon_whats" />
          </a>
        </button>
      </div>
    </section>
  );
};

export default Servicos;
