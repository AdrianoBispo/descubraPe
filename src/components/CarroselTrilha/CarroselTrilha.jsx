import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CarroselTrilha.css";

import gastronomica from "../../assets/landingPage/feijao.webp";
import capelas from "../../assets/landingPage/capela_dourada_1.jpg";
import aventuras from "../../assets/landingPage/parque_bonito.webp";
import cultural from "../../assets/landingPage/cultural.jpg";
import praia from "../../assets/landingPage/praia.webp";

const trilhas = [
  { id: 1, titulo: "Gastronômica", imagem: gastronomica },
  { id: 2, titulo: "Capelas", imagem: capelas },
  { id: 3, titulo: "Aventuras", imagem: aventuras },
  { id: 4, titulo: "Cultural", imagem: cultural },
  { id: 5, titulo: "Praia", imagem: praia },
  // { id: 6, titulo: "Eventos", imagem: cultural }, Card para eventos
];

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
      navigate(`/trilhas/${item.id}`);
    }
  };

  return (
    <div className="mt-12">
      <h1 className="titulo text-center">Recomendado para você</h1>
      <p className="text-center text-lg">
        Excursões e atividades de acordo com seus interesses.
      </p>

      <div className="carrossel-container">
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
                  src={item.imagem}
                  alt={item.titulo}
                  className="carrossel-imagem"
                />
                <h3 className="carrossel-nomeTrilha">{item.titulo}</h3>
              </div>
            ))}
            <button onClick={proximo} className="carrossel-setalateralDireita">
              ❯
            </button>
          </div>
        </div>

        <div className="carrossel-subtitulo">
          <p>
            <strong>E muito mais</strong>
          </p>
        </div>
        <p className="text">
          Monte a sua trilha personalizada de forma prática e rápida!
        </p>
      </div>
    </div>
  );
}
