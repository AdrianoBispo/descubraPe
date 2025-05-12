import { FaCamera, FaRegIdBadge, FaUser } from "react-icons/fa";
import { MdOutlineMuseum } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { GrSchedules } from "react-icons/gr";
import userPhoto from "../../../../assets/landingPage/usuario.png";
import { IoIosUnlock } from "react-icons/io";

import "./Profile.css";

export function Profile() {
  return (
    <>
      <h1 className="titulo">
        Crie seu Perfil e Personalize do seu Jeito
      </h1>

      <div className="perfil-container1">
        <div className="perfil-esquerda">
          <img src={userPhoto} alt="Usuário" />
          <button className="Camera">
            <FaCamera className="CameraIcon" />
          </button>

          <button className="btn-opcao">
            <FaUser className="Icones" />
            Em Geral
          </button>
          <button className="btn-opcao">
            <FaRegIdBadge className="Icones" />
            Dados Pessoais
          </button>
          <button className="btn-opcao">
            <IoIosUnlock className="Icones" />
            Alterar Senha
          </button>
          <button className="btn-excluir">Excluir Conta</button>
        </div>

        <div className="perfil-direita">
          <h2>
            Bruna Santos <span>/</span> Nível 5 • 3 Badges • 1250 XP
          </h2>
          <p className="descricaoUser">
            "Apaixonada por cultura, tecnologia e turismo em Pernambuco."
          </p>

          <div>
            <h2 className="preferencias">Preferências Culturais</h2>
            <div className="preferencias-btns">
              <button>
                {" "}
                <MdOutlineMuseum className="Icones" /> Museus
              </button>
              <button>
                {" "}
                <FaUmbrellaBeach className="Icones" /> Praias
              </button>
              <button>
                {" "}
                <GrSchedules className="Icones" /> Eventos
              </button>
            </div>
          </div>

          <div className="visitas-lista">
            <h3>Histórico de Visitas</h3>
            <ul>
              <li>
                <strong>• Instituto Ricardo Brennand</strong> | Visitado em:
                03/04/2025
                <p className="descrLocal">
                  "Um lugar incrível com uma coleção surpreendente!"
                </p>
                <div className="estrelas">⭐⭐⭐⭐⭐</div>
              </li>
            </ul>
          </div>

          <div className="MinhasListas">
            <h3>Minhas Listas de Locais</h3>
            <button className="btn-cinza">+ Nova Lista</button>
          </div>

          <div className="MinhasReco">
            <h3>Minhas Recomendações</h3>
            <ul>
              <li>• Paço do Frevo</li>
              <li>• Marco Zero</li>
            </ul>
            <button className="btn-cinza">+ Compartilhar</button>
          </div>
        </div>
      </div>
    </>
  );
};
