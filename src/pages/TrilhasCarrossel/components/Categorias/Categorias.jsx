import { useParams } from "react-router-dom";

import {
  Rating,
} from "@material-tailwind/react";

import { FaCalendarDays } from "react-icons/fa6";

import { trilhas } from "../../../../mocks/trilhas";

import "./Categorias.css";

export function Categorias() {
  const { id } = useParams();
  const trilha = trilhas.find((t) => t.tituloItemCarrossel === id);

  if (!trilha)
    return <h1 className="titulo mt-32 text-center">Trilha não encontrada</h1>;

  return (
    <div className="container">
      {/* Conteúdo principal */}
      <main className="main">
        {/* Coluna do topo */}
        <div className="top-column">
          <div className="titulo-trilha">
            <h2>{trilha.tituloCategoria}</h2>
          </div>
        </div>
        {/* Coluna esquerda */}
        <div className="left-column">
          {/* Seção Explorar */}
          <div>
            <div className="explore-header mt-16">
              <h3>Explorar</h3>
            </div>

            {/* Cards */}
            <div className="cards">
              {trilha.lugares.map((lugar) => (
                <div className="card">
                  <img src={lugar.capaLocal} alt={lugar.tituloLocal} />
                  <h4 className="truncate ">{lugar.tituloLocal}</h4>
                  <div className="flex flex-row items-center">
                    <Rating className="pb-1.5" value={parseInt(lugar.avaliacao)} readonly />
                    <p className="text-green-600">({lugar.qtdeAvaliacao})</p>
                  </div>
                  <p className="truncate">{lugar.descricao}</p>
                  <button className="trilha-btn">Adicionar à Trilha</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coluna direita - Mapa */}
        <div className="right-column">
          <div className="map-wrapper">
            <iframe
              src={trilha.mapa}
              width="600"
              height="450"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
