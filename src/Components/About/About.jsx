// import aboutbackground from "../../assets/aboutbackground1.jpg";
import AboutBackgroundImage from "../../assets/about-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

import './About.css';

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        {/* <img src={aboutbackground} alt="imagem de donuts empilhados" /> */}
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="mao segurando um donut" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre Nós</p>
        <h1 className="primary-heading">
          É Importante Conhecer Quem Alimenta Você
        </h1>
        <p className="primary-text">
          Somos uma doceria local dedicada a trazer a você os donuts mais
          deliciosos da cidade.
        </p>
        <p className="primary-text">
          Nossa história começou com uma paixão e desejo de criar um espaço onde
          amigos e familiares possam se reunir e desfrutar de momentos doces
          juntos.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Leia Mais</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Assista Nosso Vídeo
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
