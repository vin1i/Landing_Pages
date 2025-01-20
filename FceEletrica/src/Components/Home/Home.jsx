import "./Home.css";
// import ImgPrincipal from "../../assets/Imagens/Banner Principal jpg.jpg";
// import Duvidas1 from "../../assets/Imagens/Duvidas 1.png";

function Home() {
  return (
    <section className="hero" id="Início">
      <div className="content">
        <h1>ELETRICISTAS PROFISSIONAIS</h1>
        <p>
          Garantimos segurança e eficiência em instalações e manutenção elétrica
          para residências, comércios, empresas e condomínios.
        </p>
        <div className="btn-container">
          <a
            className="btn_services"
            href="#Servicos"
          
          >
            Serviços
          </a>

          <button className="btn_contact">
            <a
              href="https://api.whatsapp.com/send?phone=5562994557917&text=Ol%C3%A1!%20Sou%20visitante%20do%20site%20ELETRICISTAS%20PROFISSIONAIS%20e%20estou%20interessado%20nos%20servi%C3%A7os%20el%C3%A9tricos.%20Poderia%20fornecer%20mais%20detalhes%3F
            "
              target="_blank
            "
            >
              Fale Conosco
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
