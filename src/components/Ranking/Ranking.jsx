import React from "react";
import "./Ranking.css";

import avatar1 from "../../assets/landingPage/avatarFem.png";
import avatar2 from "../../assets/landingPage/avatarMasc.png";
import avatar3 from "../../assets/landingPage/avatarMasc.png";
import avatar4 from "../../assets/landingPage/usuario.png";
import avatar5 from "../../assets/landingPage/avatarMasc.png";
import avatar6 from "../../assets/landingPage/avatarMasc.png";

export function Ranking() {
  const usuarios = [
    {
      pos: 1,
      nome: "Maria Silva",
      avatar: avatar1,
      xp: 15000,
      missoes: 32,
      badges: 12,
      total: 15824,
    },
    {
      pos: 2,
      nome: "João Pereira",
      avatar: avatar2,
      xp: 14500,
      missoes: 30,
      badges: 10,
      total: 15250,
    },
    {
      pos: 3,
      nome: "Carlos Rocha",
      avatar: avatar3,
      xp: 13050,
      missoes: 28,
      badges: 9,
      total: 14728,
    },
    {
      pos: 4,
      nome: "Bruna Santos",
      avatar: avatar4,
      xp: 1250,
      missoes: 5,
      badges: 2,
      total: 520,
      destaque: true,
    },
    {
      pos: 5,
      nome: "Marcelo Borges",
      avatar: avatar5,
      xp: 25,
      missoes: 3,
      badges: 1,
      total: 24,
    },
    {
      pos: 6,
      nome: "Marcos Felipe",
      avatar: avatar6,
      xp: 0,
      missoes: 0,
      badges: 0,
      total: 0,
    },
  ];

  return (
    <>
      <h1 className="titulo">Concorra com seus Amigos e Outros Usuários</h1>
      <div className="ranking-container">
        <div className="ranking">
          <h3>🏆 Ranking dos Exploradores de Pernambuco</h3>
          <p className="descricaoo">
            Classificação com base em XP, Missões Concluídas e Badges
            Conquistadas. Atualizado em: 10:00, 26/10/2024
          </p>
          <div className="filtros">
            <button className="tab ativa">Geral</button>
            <button className="tab">Amigos</button>
            <select>
              <option>Ordenar por: Pontuação Total</option>
              <option>XP</option>
              <option>Missões</option>
              <option>Badges</option>
            </select>
          </div>

          <table className="tabela-ranking">
            <thead>
              <tr>
                <th>Posição</th>
                <th>Usuário</th>
                <th>XP</th>
                <th>Missões</th>
                <th>Badges</th>
                <th>Pontuação Total</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr
                  key={usuario.pos}
                  className={usuario.destaque ? "linha-destaque" : ""}
                >
                  <td>{usuario.pos}</td>
                  <td className="usuario">
                    <img
                      src={usuario.avatar}
                      alt={usuario.nome}
                      className="avatar-mini"
                    />
                    {usuario.nome}
                  </td>
                  <td>{usuario.xp}</td>
                  <td>{usuario.missoes}</td>
                  <td>{usuario.badges}</td>
                  <td>{usuario.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
