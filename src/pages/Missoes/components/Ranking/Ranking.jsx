import { usuario } from "../../../../assets";
import { Pontos } from "../../../../assets/index";
import { Ranking1 } from "../../../../assets/index";

import "./Ranking.css";
import "../AchievementProfile/AchievementProfile.css";

export function Ranking() {
  return (
    <div className="w-full min-h-screen bg-white p-6 flex flex-col gap-6 SecaoUsuario">
      {/* Seus Pontos */}
      <div className="border rounded-xl p-4 shadow-sm">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <span>
            <img src={Pontos} className="Icones"/>
          </span> Seus Pontos
        </h3>
        <p className="text-sm mt-1 ml-5">
          Saldo: <span className="text-green-600 font-semibold">520 Pontos</span>
        </p>
        <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
          Resgatar Recompensas
        </button>
      </div>

      {/* Ranking */}
      <div className="border rounded-xl p-4 shadow-sm ">
        <h3 className="text-xl font-semibold flex items-center gap-2 mb-1">
          <span>
            <img src={Ranking1} className="Icones"/>
          </span> Ranking dos Exploradores de Pernambuco
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          Classificação com base em XP, Missões Concluídas e Badges Conquistadas. Atualizado em: 10:00, 26/10/2024
        </p>
        <div className="flex items-center gap-2 mb-4">
          <button className="px-4 py-1 bg-gray-800 text-white rounded-lg text-sm font-medium">Geral</button>
          <button className="px-4 py-1 bg-gray-200 text-gray-800 rounded-lg text-sm font-medium">Amigos</button>
          <select className="ml-auto border rounded-lg px-3 py-1 text-sm">
            <option>Ordenar por:</option>
            <option>XP</option>
            <option>Missões</option>
            <option>Badges</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">Posição</th>
                <th className="px-4 py-2">Usuário</th>
                <th className="px-4 py-2">XP</th>
                <th className="px-4 py-2">Missões</th>
                <th className="px-4 py-2">Badges</th>
                <th className="px-4 py-2">Pontuação Total</th>
              </tr>
            </thead>
            <tbody>
              {[
                { nome: "Maria Silva", xp: 15000, missoes: 32, badges: 12, total: 15824 },
                { nome: "João Pereira", xp: 14500, missoes: 30, badges: 10, total: 15250 },
                { nome: "Carlos Rocha", xp: 1305, missoes: 28, badges: 9, total: 14728 },
                { nome: "Bruna Santos", xp: 1250, missoes: 5, badges: 2, total: 520 },
                { nome: "Marcelo Borges", xp: 25, missoes: 3, badges: 1, total: 24 },
                { nome: "Marcos Felipe", xp: 0, missoes: 0, badges: 0, total: 0 }
              ].map((user, index) => (
                <tr
                  key={index}
                  className={`border-t ${user.nome === "Bruna Santos" ? "bg-yellow-50" : ""}`}
                >
                  <td className="px-4 py-2 font-medium">{index + 1}</td>
                  <td className="px-4 py-2 flex items-center gap-2">
                    <img
                      src={usuario}
                      alt="avatar"
                      className="w-6 h-6 rounded-full"
                    />
                    {user.nome}
                  </td>
                  <td className="px-4 py-2">{user.xp}</td>
                  <td className="px-4 py-2">{user.missoes}</td>
                  <td className="px-4 py-2">{user.badges}</td>
                  <td className="px-4 py-2">{user.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}