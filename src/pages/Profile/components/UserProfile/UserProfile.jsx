import { FaCamera, FaRegIdBadge } from "react-icons/fa";
import { MdOutlineMuseum } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { GrSchedules } from "react-icons/gr";

import { usuario } from "../../../../assets/index";

import "./UserProfile.css";
import "../../../Missoes/components/AchievementProfile/AchievementProfile.css";

export function UserProfile({ onClick }) {
  return (
    <div className="w-full min-h-screen mt-40 flex flex-col gap-6 SecaoUsuario">
      <div className="flex flex-col md:flex-row w-full min-h-screen rounded-2xl shadow-lg gap-6">
        {/* Coluna Esquerda */} 
        <div className="flex flex-col items-center gap-4 w-full md:w-1/3">
          <div className="relative">
            <img
              src={usuario}
              alt="Foto de perfil"
              className="w-96 h-96 rounded-full object-cover avatar"
            />
            <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2  p-2 rounded-full Camera">
              <FaCamera size={70} />
            </button>
          </div>
          <button className="px-6 py-2 rounded-full flex items-center gap-2 Camera" onClick={onClick}>
            <FaRegIdBadge /> Dados Pessoais
          </button>
        </div>

        {/* Coluna Direita */} 
        <div className="flex flex-col gap-4 w-full md:w-2/3">
          <div>
            <h2 className="text-4xl font-base">Bruna Santos <span className="text-3xl font-base">/ Nível 5 • 3 Badges • 1250 XP</span></h2>
            <p className="text-gray-700 mb-4">"Apaixonada por cultura, tecnologia e turismo em Pernambuco."</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Preferências Culturais</h3>
            <div className="flex gap-3 mt-2 mb-2 preferencias-btns">
              <button className="rounded-full"><MdOutlineMuseum size={30} className="Icones"/> Museus</button>
              <button className="rounded-full"><FaUmbrellaBeach size={30} className="Icones"/> Praias</button>
              <button className="rounded-full"><GrSchedules size={30} className="Icones"/> Eventos</button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold visitas-lista mb-2">Histórico de Visitas</h3>
            <ul className="list-disc list-inside">
              <li className="mt-2">
                <strong>Instituto Ricardo Brennand</strong> | Visitado em: 03/04/2025
                <p className="ml-5 italic text-gray-700 mt-1">"Um lugar incrível com uma coleção surpreendente!"</p>
                <p className="ml-5 text-yellow-700 text-lg">★★★★★</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold visitas-lista">Minhas Listas de Locais</h3>
            <button className="mt-2 border bg-gray-200 px-4 py-1 rounded-md mb-2">+ Nova Lista</button>
          </div>

          <div>
            <h3 className="text-2xl font-semibold visitas-lista mb-2">Minhas Recomendações</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Paço do Frevo</li>
              <li>Marco Zero</li>
            </ul>
            <button className="mt-2 border border bg-gray-200 px-4 py-1 rounded-md">+ Compartilhar</button>
          </div>
        </div>
      </div>
    </div>
  );
}