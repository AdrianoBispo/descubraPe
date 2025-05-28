import { usuario } from "../../../../assets/index";
import { Badge } from "../../../../assets/index";
import { Badge1 } from "../../../../assets/index";
import { Badge2 } from "../../../../assets/index";
import { Missoes } from "../../../../assets/index";
import { Progress, Typography } from "@material-tailwind/react";

import { Ranking } from "../Ranking/Ranking";

import "./AchievementProfile.css";

export function AchievementProfile() {
  return (
    <>
      <div className="w-full min-h-screen mt-20 bg-white p-6 flex flex-col items-center gap-6 SecaoUsuario">
        {/* Perfil do usuário */}
        <div className="w-2/4 flex items-center gap-4">
          <img
            src={usuario}
            alt="Foto de perfil"
            className="w-40 h-40 mb-4 mr-4 rounded-full object-cover avatar"
          />
          <div className="flex flex-col">
            <h2 className="nome">Bruna Santos</h2>
            <p className="bio">
              "Apaixonada por cultura, tecnologia e turismo em Pernambuco."
            </p>

            <div className="w-full mt-3">
              <div className=" flex items-center justify-between gap-4">
                <Typography color="blue-gray" variant="h6" className="text-[#009245]">
                  Nível 5
                </Typography>
                <Typography color="blue-gray" className="text-[#009245]" variant="h6">
                  1250/2000 XP
                </Typography>
              </div>
              <Progress value={62.5} color="green"/>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="w-2/4 border rounded-xl p-4 shadow-sm">
          <h3 className=" text-lg font-semibold mb-3 flex items-center gap-2">
            <img src={Badge1} className="Icones" />
            Badges
          </h3>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <img src={Badge2} className="Icones mx-auto" />
              <p className="text-sm mt-1">
                Explorador
                <br />
                Iniciante
              </p>
            </div>
            <div className="text-center">
              <img src={Badge} className="Icones mx-auto" />
              <p className="text-sm mt-1">
                Amante da
                <br />
                Cultura
              </p>
            </div>
            <button className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
              Ver Todos
            </button>
          </div>
        </div>

        {/* Missões */}
        <div className="w-2/4 border rounded-xl p-4 shadow-sm">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <span>
              <img src={Missoes} className="Icones mx-auto" />
            </span>
            Missões
          </h3>
          <div className="flex gap-4 mb-4">
            <button className="px-4 py-1 bg-gray-800 text-white rounded-lg text-sm font-medium">
              Ativas
            </button>
            <button className="px-4 py-1 bg-gray-200 text-gray-800 rounded-lg text-sm font-medium">
              Concluídas
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-2">
            <div className="border-t pt-2">
              <h4 className="font-semibold">Visite o Museu Cais do Sertão</h4>
              <p className="text-sm text-gray-600">
                Explore a história de Luiz Gonzaga e a cultura sertaneja.
              </p>
              <p className="text-green-600 text-sm font-semibold mt-1">
                +150 XP
              </p>
              <button className="mt-2 px-3 py-1 bg-blue-600 text-white text-sm rounded-lg">
                Ver Detalhes
              </button>
            </div>
            <div className="border-t pt-2">
              <h4 className="font-semibold">Participe do Carnaval de Olinda</h4>
              <p className="text-sm text-gray-600">
                Viva a folia nas ladeiras de Olinda.
              </p>
              <p className="text-green-600 text-sm font-semibold mt-1">
                +200 XP
              </p>
              <button className="mt-2 px-3 py-1 bg-blue-600 text-white text-sm rounded-lg">
                Ver Detalhes
              </button>
            </div>
          </div>
        </div>
        <Ranking />
      </div>
    </>
  );
}
