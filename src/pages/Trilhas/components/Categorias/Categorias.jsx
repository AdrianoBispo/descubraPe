import { useParams } from "react-router-dom";

import {
  Rating,
} from "@material-tailwind/react";

import { FaCalendarDays } from "react-icons/fa6";

import { trilhas } from "../../../../mocks/trilhas";

import "./Categorias.css";

export function Categorias() {
  const { id } = useParams();
  const trilha = trilhas.find((t) => t.id === id);

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
            <div className="flex flex-row gap-1 items-center">
              <FaCalendarDays size={20} />
              <p className="date text-lg font-medium">11-04</p>
            </div>
          </div>
        </div>
        {/* Coluna esquerda */}
        <div className="left-column">
          {/* Seção Explorar */}
          <div>
            <div className="explore-header">
              <h3>Explorar</h3>
              <button className="Pesquisar">Pesquisar</button>
            </div>

            {/* Cards */}
            <div className="cards">
              <button className="seta">❮</button>
              {trilha.lugares.map((lugar) => (
                <div className="card">
                  <img src={lugar.capaLocal} alt={lugar.tituloLocal} />
                  <h4>{lugar.tituloLocal}</h4>
                  <div className="flex flex-row items-center">
                    <Rating className="pb-1.5" value={parseInt(lugar.avaliacao)} readonly />
                    <p className="text-green-600">({lugar.qtdeAvaliacao})</p>
                  </div>
                  <p>{lugar.descricao}</p>
                  <button className="trilha-btn">Adicionar à Trilha</button>
                </div>
              ))}
              <button className="seta">❯</button>
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
