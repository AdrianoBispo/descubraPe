import { usuarios } from "../../../../mocks/usuarios";

import "./Ranking.css";

export function Ranking() {


  return (
    <>
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

    </>
  );
}
