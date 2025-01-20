import React from "react";
import Aboutimg1 from "../../assets/Imagens/Com Frio imagem quem somos.png";
import Aboutimg2 from "../../assets/Imagens/Instalação.png";
import Aboutimg3 from "../../assets/Imagens/Limpeza.png";
import Aboutimg4 from "../../assets/Imagens/Manutenção.png";
import linhaelemento from "../../assets/Imagens/Elementos 2.png";
import "./about.css";

const About = () => {
  return (
    <div className="container" id="sobre">
      <div className="main-image">
        <img src={Aboutimg1} alt="Imagem Principal" className="img-main" />

        <img src={linhaelemento} alt="" className="img-element" />
        <div className="info">
          <h2 className="h2-main">Quem Somos</h2>

          <p className="p-main">
            A Confrio Refrigeração é dedicada a fornecer soluções eficientes e
            inovadoras em refrigeração, com a missão de garantir o conforto e a
            satisfação dos clientes. Comprometemo-nos com a excelência técnica e
            a sustentabilidade ambiental em todos os projetos. Buscamos ser
            líderes no mercado, destacando-nos pela busca constante da
            excelência, inovação tecnológica e atendimento personalizado. Nossos
            valores incluem compromisso com a qualidade, sustentabilidade,
            inovação, integridade e valorização das pessoas. A Confrio
            Refrigeração é uma empresa que visa agregar valor à sociedade e ao
            meio ambiente, construindo relações de confiança com clientes,
            colaboradores e parceiros.
          </p>
        </div>
      </div>

      <div className="secondary-images" id="instalação">
        <div className="secondary-image">
          <img src={Aboutimg2} alt="Imagem Secundária 1" />
          <div className="info">
            <h2>Instalação e Desinstalação</h2>
            <p>
              Oferecemos serviços especializados em instalação de ar
              condicionado, garantindo uma climatização eficiente e
              personalizada para proporcionar o máximo conforto em seu ambiente.
            </p>
          </div>
        </div>

        <div className="secondary-image highlighted " id="limpeza">
          <img src={Aboutimg3} alt="Imagem Secundária 2" />
          <div className="info">
            <h2>Limpeza Preventiva</h2>
            <p>
              Priorizamos a saúde do seu ambiente com nossos serviços de
              prevenção, realizando limpeza regular de sistemas de ar
              condicionado para garantir um ar fresco e livre de impurezas,
              promovendo um ambiente mais saudável.
            </p>
          </div>
        </div>

        <div className="secondary-image" id="manutenção">
          <img src={Aboutimg4} alt="Imagem Secundária 3" />
          <div className="info">
            <h2>Manutenção e Reparo</h2>
            <p>
              Conte conosco para manutenção e reparo de ar condicionado. Nossa
              equipe altamente qualificada está pronta para diagnosticar e
              solucionar qualquer problema, assegurando o funcionamento
              eficiente do seu sistema de climatização.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
