import { useNavigate } from "react-router-dom";
import { Pins } from "../../assets/index";
import { Bandeira } from "../../assets/index";
import { Seta } from "../../assets/index";
import { mulherBanner } from "../../assets/index";

import "./Banner.css";
import { useAuth } from './../../services/useAuth';

export function Banner() {
  const navigate = useNavigate();
  const {currentUser} = useAuth();

  return (
    <section className="container__banner bg-gradient-to-r from-[#002CDF] to-[#56FAFF]">
      <div className="container__banner-textos">
        <h1>
          Do frevo ao mar <br /> cristalino:
          <br /> Pernambuco é paixão <br /> à primeira vista!
        </h1>
        <p>
          Descubra roteiros incríveis e participe de <br /> experiências únicas.
          Conecte-se com o que <br /> Pernambuco tem de mais autêntico.
        </p>
        <button
          className="Aventure-se"
          onClick={currentUser ? () => navigate("/minhas-trilhas") : () => navigate("/login")}
        >
          AVENTURE-SE <img src={Seta} alt="ícone seta para esquerda" />
        </button>
      </div>
      <div className="container__banner-imagens">
        <div className="mulher__banner">
          <img
            src={mulherBanner}
            alt="Mulher com sombrinha de frevo em Olinda"
          />
        </div>
        <img src={Pins} alt="Pins" className="iconPin__banner" />
        <img
          src={Bandeira}
          alt="Decoração frevo"
          className="bandeiraPe__banner"
        />
      </div>
    </section>
  );
}
