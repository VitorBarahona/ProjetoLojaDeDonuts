import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseFloodWater,
  faUtensils,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

import './Work.css'

const Work = () => {
  const workInfoData = [
    {
      image: <FontAwesomeIcon icon={faHouseFloodWater} />,
      title: "Feito como se fosse em casa",
      text: "Todos os nossos donuts são preparados com carinho e atenção aos detalhes, como se fossem feitos na cozinha da sua casa. Utilizamos receitas tradicionais e tecnicas artesanais para criar donuts fresquinhos e saborosos, que lembram os melhomeres momentos em familia.",
    },
    {
      image: <FontAwesomeIcon icon={faUtensils} />,
      title: "Ingredientes selecionados",
      text: "Escolhemos a dedo os melhores ingedientes para garantir que nossos donuts sejam sempre frescos e deliciosos. usamos apenas produtos de qualidade, desde a farinha até os recheios, para proporcionar a você uma experiência gustativa excepicional.",
    },
    {
      image: <FontAwesomeIcon icon={faTruck} />,
      title: "Entrega em toda Cidade",
      text: "Levamos nossos donuts direto até você, em qualquer lugar da cidade. Nossa equipe de entregas garante que seu pedido chegue rápido e em perfeitas condições, para que você possa desfrutar de nossos donuts fresquinhos e saborosos, onde quer que esteja.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Nosso Trabalho</p>
        <h1 className="primary-heading">Como servimos você</h1>
        <p className="primary-text">
          Nossa missão é proporcionar a você uma experiência única e deliciosa.
          Desde a seleção dos ingredientes até a entrega no seu endereço, cada
          etapa do nosso processo é pensada para garantir que você receba os
          melhores donuts da cidade. Estamos comprometidos com a qualidade e a
          satisfação dos nossos clientes.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">{data.image}</div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;