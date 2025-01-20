import "./App.css";
import Faixa from "./Components/Faixa/Faixa";
import Contato from "./Components/Contato/Contato";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import ServicesAreas from "./Components/ServicesAreas/ServicesAreas";
import ScrollUp from "./Components/Scrollup/ScrollUp";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <ServicesAreas />
      <Faixa />
      <Contato />
      <ScrollUp />
      <Footer />
    </>
  );
}

export default App;
