import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { feijao, capelaDourada1, mulherEscalando, cultural, praia} from "../../assets/index";

import "./CarroselTrilha.css";

const trilhas = [
  { id: 1, titulo: "Gastronômica", imagem: feijao },
  { id: 2, titulo: "Capelas", imagem: capelaDourada1 },
  { id: 3, titulo: "Aventuras", imagem: mulherEscalando },
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
      navigate(`/trilhas`);
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
