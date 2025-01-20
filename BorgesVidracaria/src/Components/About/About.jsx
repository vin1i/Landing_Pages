import "./About.css";
import Profile from "../../assets/img/VB BORGES Logo.png";
const About = () => {
  return (
    <section className="section__banner" id="Sobre">
      <div className="profile__card">
        <div className="profile__content">
          <div className="profile__img-container">
            <img src={Profile} alt="" className="profile__img" />
          </div>
          <div className="profile__about">
            <h1 className="profile__title">Sobre Nós</h1>
            <p className="md:text-left md:pl-4 lg:text-left lg:pl-4 text-center">
              A Vidraçaria Borges atua no setor da construção civil, produzindo
              e instalando esquadrias de alumínio para obras de médio e alto
              padrão. Trabalhamos com as linhas mais conhecidas do mercado e
              também oferecemos soluções nas linhas especiais, proporcionando
              produtos personalizados para cada projeto.
            </p>

            <p className="md:text-left md:pl-4 lg:text-left lg:pl-4 text-center">
              Desde 2015, somos uma empresa especializada em vidraçaria e
              esquadrias de alumínio, destacando-nos pela qualidade,
              transparência e comprometimento em cada serviço prestado. Nossa
              equipe conta com profissionais capacitados e experientes,
              garantindo um resultado final de excelência em todos os nossos
              trabalhos.
            </p>

            {/* <button className="btn">
          {" "}
          <a href="">Fale Conosco</a>
        </button>  SEM BOTÃO NESSE COMPONENTE, MAS CASO SEJA PRECISO FUTURAMENTE, ESTÁ AQUI....*/}
          </div>
        </div>
      </div>

      <div className="down-p">
        <h1 className="p-line">Nossos Valores</h1>
        <p className="text-center ">
          Na Borges Vidraçaria, nossa missão é baseada em valores fundamentais
          como espiritualidade, integridade e empatia. Buscamos a harmonia em
          cada projeto, priorizando a superação das expectativas dos clientes e
          garantindo sua plena satisfação. Nossas interações são pautadas pela
          honestidade, transparência e ética, e estamos comprometidos com o
          desenvolvimento da comunidade e do meio ambiente. Nosso foco é sempre
          a excelência e a qualidade, garantindo serviços de alto padrão em
          todas as etapas, desde o projeto até a instalação.
        </p>
      </div>
    </section>
  );
};

export default About;
