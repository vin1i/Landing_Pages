import "./About.css";
import Profile from "../../assets/Quem sou png.png";
const About = () => {
  return (
    <section className="section__banner" id="Sobre">
      <div className="profile__card">
        <div className="profile__content">
          <div className="profile__img-container">
            <img src={Profile} alt="" className="profile__img" />
          </div>
          <div className="profile__about">
            <h1 className="profile__title">Quem Sou</h1>
            <p>
              Sou Dayanne, sensitiva com mais de duas décadas de experiência
              dedicadas a ajudar pessoas como você a encontrar o caminho para o
              sucesso e a felicidade. Em um mundo onde muitos se aventuram em
              práticas como trabalhos, simpatias e bruxarias sem compreender
              plenamente suas nuances e consequências, estou aqui para oferecer
              orientação e resultados reais.
            </p>
            <p>
              Com um atendimento disponível 24 horas por dia, estou sempre
              pronta para ajudar a dissipar suas dúvidas e preocupações. Se você
              já buscou soluções anteriormente e não obteve os resultados
              desejados, pode ser que algo não tenha sido feito corretamente.
              Pare agora mesmo de cair em golpes e conte comigo para
              orientá-lo(a) da melhor forma possível.
            </p>

            {/* <button className="btn">
          {" "}
          <a href="">Fale Conosco</a>
        </button>  SEM BOTÃO NESSE COMPONENTE, MAS CASO SEJA PRECISO FUTURAMENTE, ESTÁ AQUI....*/}
          </div>
        </div>
      </div>
      <div className="down-p">
        <p className="p-line">
          Meus trabalhos são realizados com total transparência e dedicação,
          sempre na sua presença, seja pessoalmente ou através de vídeo chamada.
          Comigo, você não apenas obtém resultados, mas também a certeza de
          estar sendo guiado(a) por alguém com experiência e conhecimento
          genuínos.
        </p>
        <p>
          Estou aqui para ajudá-lo(a) a superar desafios, alcançar seus
          objetivos e encontrar a paz interior que tanto merece. Entre em
          contato hoje mesmo e dê o primeiro passo rumo a uma vida mais plena e
          realizada.
        </p>
      </div>
    </section>
  );
};

export default About;
