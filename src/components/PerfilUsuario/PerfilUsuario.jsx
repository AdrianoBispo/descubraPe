import React from "react";
import "./PerfilUsuario.css";

import avatar from "../../assets/landingPage/usuario.png";

export function PerfilUsuario() {
  return (
    <>
      <h1 className="titulo">
        Complete Missões, Suba de Nível, Acumule Pontos e Ganhe Recompensas
      </h1>

      <div className="perfil-container">
        <div className="cabecalho-perfil">
          <img src={avatar} alt="Foto de perfil" className="avatar" />
          <div>
            <h2 className="nome">Bruna Santos</h2>
            <p className="bio">
              "Apaixonada por cultura, tecnologia e turismo em Pernambuco."
            </p>
          </div>
          <div className="nivel-container">
            <span className="nivel">Nível 5</span>
            <span className="xp">1250 / 2000 XP</span>
          </div>
        </div>

        <div className="secao">
          <h3 className="secao-titulo">🏅 Badges</h3>
          <div className="badges">
            <div className="badge">
              <span role="img" aria-label="medalha">
                🥇
              </span>
              <p>Explorador Iniciante</p>
            </div>
            <div className="badge">
              <span role="img" aria-label="medalha">
                🥈
              </span>
              <p>Amante da Cultura</p>
            </div>
          </div>
          <button className="btn-ver-todos">Ver Todos</button>
        </div>

        <div className="secao">
          <h3>🎖️ Seus Pontos</h3>
          <p>
            Saldo: <span className="saldo">520 Pontos</span>
          </p>
          <button className="btn-ver-todos">Resgatar Recompensas</button>
        </div>

        <div className="secao">
          <h3 className="secao-titulo">🎯 Missões</h3>
          <div className="tabs">
            <button className="tab ativa">Ativas</button>
            <button className="tab">Concluídas</button>
          </div>
          <div className="missoes">
            <div className="missao">
              <h4>Visite o Museu Cais do Sertão</h4>
              <p>Explore a história de Luiz Gonzaga e a cultura sertaneja.</p>
              <p className="xp-ganho">+150 XP</p>
              <button className="btn-detalhes">Ver Detalhes</button>
            </div>
            <div className="missao">
              <h4>Participe do Carnaval de Olinda</h4>
              <p>Viva a folia nas ladeiras de Olinda.</p>
              <p className="xp-ganho">+200 XP</p>
              <button className="btn-detalhes">Ver Detalhes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
