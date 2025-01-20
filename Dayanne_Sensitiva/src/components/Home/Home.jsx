import "./Home.css";
import elemento from "../../assets/Elemento 1.png";
// import ImgPrincipal from "../../assets/Imagens/Banner Principal jpg.jpg";
// import Duvidas1 from "../../assets/Imagens/Duvidas 1.png";

function Home() {
  return (
    <section className="hero" id="Início">
      <div className="content">
        <img className="elemento" src={elemento} alt="" />
      </div>
      <div className="btn__home-container">
        {" "}
        <button className="btn__home">Fale Conosco</button>
      </div>
    </section>
  );
}

export default Home;
