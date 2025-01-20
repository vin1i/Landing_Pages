import "./Services.css";
import Serviços from "../../assets/Elemento 02.jpg";

const Services = () => {
  return (
    <section className="card__container" id="Serviços">
      <div className="card__service">
        <div className="service__image">
          <img src={Serviços} alt="" className="secondary-img" />
        </div>
        <div className="information-service">
          <h1 className="title__services">Meus Serviços</h1>
          <ul>
            <li>- Trabalhos Espirituais Presencial</li>
            <li>- Atendimento por Vídeo Chamada </li>
            <li>- Desmancho Trabalhos de Magia Negra </li>
            <li>- Realizo Amarração</li>
            <li>- União</li>
            <li>- Adoçamento</li>
            <li>- Casamento Espiritual</li>
            <li>- Impotência</li>
            <li>- Filhos Problemáticos</li>
            <li>- Vícios</li>
            <li>- Aumento de Lucro Financeiro</li>
            <li>- Crescimento de Empresa</li>
            <li>- Afasto Rival</li>
            <li>- Pessoas Invejosas</li>
            <li>- Olho Grande</li>
            <li>- Tratamento de Depressão</li>
            <li>- Desmancho Pactos Feitos Sem a Aprovação do Cliente</li>
            <li>
              - Retiro Encosto e Trabalhos para Todos os Fins com Resultados
              Rápidos e Definitivos.
            </li>
          </ul>

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
