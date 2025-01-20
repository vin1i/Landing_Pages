import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Services from "./components/Services/Service.jsx";
import Contact from "./components/Contatos/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
