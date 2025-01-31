import "./home.css";

import Data from "./Data";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container grid">
        <div className="home__content grid">
          <div className="home__img"></div>

          <Data />
        </div>
      </div>
    </section>
  );
};

export default Home;
