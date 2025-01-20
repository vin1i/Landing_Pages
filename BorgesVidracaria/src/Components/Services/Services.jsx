import "./Services.css";
import Serviços from "../../assets/img/VB BORGES 3.png";

const Services = () => {
  return (
    <section className="card__container" id="Serviços">
      <div className="card__service">
        <div className="service__image">
          <img src={Serviços} alt="" className="secondary-img" />
        </div>
        <div className="information-service">
          <h1 className="title__services  ">Nossos Serviços</h1>
          <p>
            Na Borges Vidraçaria, oferecemos uma ampla gama de soluções para sua
            obra, incluindo vidros temperados e laminados para resistência e
            proteção, guarda-corpos seguros e elegantes, espelhos para
            acabamentos personalizados, coberturas funcionais e projetos
            especiais sob medida.{" "}
          </p>

          {/* <button className="btn">
            {" "}
            <a href="">Fale Conosco</a>
          </button>  SEM BOTÃO NESSE COMPONENTE, MAS CASO SEJA PRECISO FUTURAMENTE, ESTÁ AQUI....*/}
        </div>
      </div>

      {/* Adicione mais cards aqui conforme necessário */}
    </section>
  );
};

export default Services;
