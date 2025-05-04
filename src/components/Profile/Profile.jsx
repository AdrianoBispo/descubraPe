import React from "react";
import { FaCamera, FaUser, FaLock } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import userPhoto from "../../assets/landingPage/usuario.png";
import "./Profile.css";

const Profile = () => {
    return (
        <div className="perfil-container1">
            <div className="perfil-esquerda">
                <img src={userPhoto} alt="Usuário" />
                <button className="Camera">
                    <FaCamera />
                </button>

                <button className="btn-opcao">
                    <MdPerson />
                    Em Geral
                </button>
                <button className="btn-opcao">
                    <FaUser />
                    Dados Pessoais
                </button>
                <button className="btn-opcao">
                    <FaLock />
                    Alterar Senha
                </button>
                <button className="btn-excluir">Excluir Conta</button>
            </div>

            <div className="perfil-direita">
                <h2>Bruna Santos <span style={{ fontWeight: 400 }}>/ Nível 5 • 3 Badges • 1250 XP</span></h2>
                <p>"Apaixonada por cultura, tecnologia e turismo em Pernambuco."</p>

                <div>
                    <h3>Preferências Culturais</h3>
                    <div className="preferencias-btns">
                        <button>Museus</button>
                        <button>Praias</button>
                        <button>Eventos</button>
                    </div>
                </div>

                <div className="visitas-lista">
                    <h3>Histórico de Visitas</h3>
                    <ul>
                        <li>
                            <strong>Instituto Ricardo Brennand</strong> | Visitado em: 03/04/2025
                            <p>"Um lugar incrível com uma coleção surpreendente!"</p>
                            <div className="estrelas">★★★★★</div>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3>Minhas Listas de Locais</h3>
                    <button className="btn-cinza">+ Nova Lista</button>
                </div>

                <div>
                    <h3>Minhas Recomendações</h3>
                    <ul>
                        <li>Paço do Frevo</li>
                        <li>Marco Zero</li>
                    </ul>
                    <button className="btn-cinza">+ Compartilhar</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
