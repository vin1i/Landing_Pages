import "./App.css";
import About from "./components/About/About";
import Contato from "./components/Contato/Contato";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ScrollUp from "./components/Scrollup/Scrollup";
// import Home from "./components/Home/Home";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <main>
        {" "}
        <Services />
        <About />
        <Contato />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
