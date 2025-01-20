import "./App.css";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Services from "./Components/Services/Services";
import Slides from "./Components/Services/Slides";
import ScrollUp from "./Components/Scrollup/Scrollup";
import Contact from "./Components/Contact/Contact";
import Carousel from "./Components/Services/Carousel";
/*IMPORT DOS VIDEOS*/
// import Videoexemplo1 from "./assets/Videos/Cobertura com vidros laminado 10mm habitat  com tecnologia  térmica.mp4";
// import Videoexemplo2 from "./assets/Videos/Decoração com espelhos bisotê painel mosaico e guarda corpo com bottons em  inox.mp4";
// import Videoexemplo3 from "./assets/Videos/Porta 03 folhas deslizantes com trilhos embutido linha suprema tubular.mp4";
// import Videoexemplo4 from "./assets/Videos/Portão automático deslizante com motor de frenagem Rapida e lenta.mp4";

function App() {
  // const slides = [Videoexemplo1, Videoexemplo2, Videoexemplo3, Videoexemplo4];

  return (
    <>
      <Header />
      <main>
        <About />
        <Services />
        <Slides autoSlide={true} />
        <div className="max-2-lg">
          {" "}
          <Carousel autoSlide={true} />
        </div>

        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
