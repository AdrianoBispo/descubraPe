import React from "react";
import "./MinhasTrilhas.css";

import brennand from "../../assets/landingPage/brennand.jpg";
import altose from "../../assets/landingPage/altodaase.jpg";
import capeladourada from "../../assets/landingPage/capela_dourada.jpg";

const favoritos = [
  {
    horario: "10:00 - 12:00",
    titulo: "Instituto Ricardo Brennand",
    descricao:
      "Um dos museus mais incríveis do Brasil, com acervo de armas, pinturas e esculturas.",
    avaliacao: 4.8,
    votos: 1234,
    imagem: brennand,
  },
  {
    horario: "13:00 - 14:00",
    titulo: "Alto da Sé",
    descricao:
      "Local histórico em Olinda, com vista panorâmica e feirinha de artesanato.",
    avaliacao: 4.7,
    votos: 876,
    imagem: altose,
  },
  {
    horario: "17:00 - 19:00",
    titulo: "Capela Dourada",
    descricao:
      "Consagrada como um dos monumentos barrocos mais importantes do Brasil.",
    avaliacao: 4.9,
    votos: 3520,
    imagem: capeladourada,
  },
];

export function MinhasTrilhas() {
  return (
    <>
      <h1 className="mt-32 titulo">Crie sua Trilha Personalizada</h1>

      <div className="trilha-container">
        <p className="descricao">
          Explore Pernambuco no seu ritmo com os lugares que você mais deseja
          conhecer.
        </p>
        <h2 className="data">Dia 1: Sábado, 30 de Setembro</h2>

        <div className="trilha-lista">
          {favoritos.map((ponto, index) => (
            <div key={index} className="trilha-item">
              <div className="horario">🕒 {ponto.horario}</div>
              <div className="conteudo">
                <img src={ponto.imagem} alt={ponto.titulo} className="imagem" />
                <div className="detalhes">
                  <h3>{ponto.titulo}</h3>
                  <p className="descricao-ponto">{ponto.descricao}</p>
                  <p className="avaliacao">
                    ⭐ {ponto.avaliacao} ({ponto.votos})
                  </p>
                </div>
                <button className="btn-remover">✖</button>
              </div>
            </div>
          ))}
        </div>

        <div className="botoes">
          <button className="btn-editar">Editar Trilha</button>
          <button className="btn-salvar">Salvar Trilha</button>
          <button className="btn-compartilhar">Compartilhar Trilha</button>
        </div>
      </div>
    </>
  );
}
