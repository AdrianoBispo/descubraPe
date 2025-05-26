import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { trilhas } from "../../mocks/trilhas";

import "./CarroselTrilha.css";

export function CarroselTrilha() {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const navigate = useNavigate();

  const anterior = () => {
    setIndiceAtual((prev) => (prev === 0 ? trilhas.length - 1 : prev - 1));
  };

  const proximo = () => {
    setIndiceAtual((prev) => (prev === trilhas.length - 1 ? 0 : prev + 1));
  };

  const handleClick = (item) => {
    if (indiceAtual === trilhas.findIndex((trilha) => trilha.id === item.id)) {
      navigate(`/trilhas/${item.tituloItemCarrossel}`);
    }
  };

  return (
    <div id="trilhas-carrossel">
      <div className="carrossel-container">
      <h1 className="carrossel-titulo">MONTE A SUA TRILHA PERSONALIZADA!</h1>
        <div className="carrossel-area">
          <div className="carrossel-wrapper">
            <button
              onClick={anterior}
              className="carrossel-setalateralEsquerda"
            >
              ❮
            </button>
            {trilhas.map((item, index) => (
              <div
                key={item.id}
                className={`carrossel-card ${
                  indiceAtual === index ? "ativo" : ""
                }`}
                onClick={() => handleClick(item)}
                style={{
                  cursor: indiceAtual === index ? "pointer" : "not-allowed",
                  opacity: indiceAtual === index ? 1 : 0.5,
                }}
              >
                <img
                  src={item.capaItemCarrossel}
                  alt={item.tituloItemCarrossel}
                  className="carrossel-imagem"
                />
                <h3 className="carrossel-nomeTrilha">{item.tituloItemCarrossel}</h3>
              </div>
            ))}
            <button onClick={proximo} className="carrossel-setalateralDireita absolute right-1 transform -translate-y-1">
              ❯
            </button>
          </div>
        </div>

        <div className="carrossel-subtitulo">
          <p>
            <strong>E muito mais</strong>
          </p>
        <p className="text">
          Monte a sua trilha personalizada de forma prática e rápida!
        </p>
        </div>
      </div>
    </div>
  );
}
