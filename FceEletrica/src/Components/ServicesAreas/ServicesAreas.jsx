import "./ServiceAreas.css";
import PredialImage from "../../assets/CNA Eletricista imagem 7.jpg";
import IndustrialImage from "../../assets/CNA Eletricista imagem 8.jpg";
import ManutençãoElétrica from "../../assets/CNA Eletricista imagem 9.jpg";
import QUEMSOMOS from "../../assets/CNA Eletricista imagem 10.jpg";

function ServiceAreas() {
  return (
    <section className="electrical-services">
      <div className="service-section">
        <img src={PredialImage} alt="Área Predial" className="service-image" />
        <div className="service-content">
          <h2>Área Predial</h2>
          <ul>
            <li>- Troca de luminárias e lâmpadas;</li>
            <li>- Instalação e substituição de tomadas;</li>
            <li>- Reparos e instalação de chuveiros;</li>
            <li>- Instalação e manutenção de cercas elétricas;</li>
            <li>- Instalação e manutenção de interfones;</li>
            <li>- Reparos e instalação de portões elétricos;</li>
          </ul>
        </div>
      </div>
      <div className="service-section reverse">
        <img
          src={IndustrialImage}
          alt="Área Industrial"
          className="service-image"
        />
        <div className="service-content">
          <h2>Área Industrial</h2>
          <ul>
            <li>- Instalação de rede elétrica;</li>
            <li>- Montagem e manutenção de painéis de força e comando;</li>
            <li>- Instalação e substituição de tomadas industriais;</li>
            <li>- Montagem e manutenção de quadros elétricos;</li>
            <li>
              - Instalação de Sistemas de Proteção contra Descargas Atmosféricas
              (SPDA);
            </li>
            <li>- Colocação e organização de cabeamento;</li>
          </ul>
        </div>
      </div>

      <div className="service-section">
        <img
          src={ManutençãoElétrica}
          alt="Área Predial"
          className="service-image"
        />
        <div className="service-content">
          <h2>Manutenção Elétrica</h2>
          <ul>
            <li>
              - Manutenção preventiva e corretiva em sistemas elétricos prediais
              e industriais;
            </li>
            <li> - Inspeções periódicas e diagnósticos de falhas;</li>
            <li>
              {" "}
              - Atualização e modernização de instalações elétricas existentes;
            </li>
          </ul>
        </div>
      </div>

      <div className="service-section reverse" id="Sobre">
        <img src={QUEMSOMOS} alt="Área Industrial" className="service-image" />
        <div className="service-content-about">
          <h2>QUEM SOMOS</h2>
          <p>
            Somos uma equipe especializada em assistência técnica para
            instalações e manutenção elétrica predial e industrial, atendendo
            residências, estabelecimentos comerciais, empresas e condomínios.
            Com ampla experiência e compromisso com a qualidade, garantimos
            segurança, eficiência e soluções personalizadas, sempre seguindo
            rigorosamente as normas técnicas. Conte conosco para manter seu
            ambiente seguro e bem cuidado.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServiceAreas;
