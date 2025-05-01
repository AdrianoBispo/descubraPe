import React from "react";
import "./Trilhas.css";
import Capela1 from "../../assets/landingPage/sao_benedito.png";
import Capela2 from "../../assets/landingPage/capela_dourada.jpg";
import Capela3 from "../../assets/landingPage/madre_deus.jpg";


export default function Trilhas() {
    return (
        <div className="container">
            {/* Conteúdo principal */}
            <main className="main">
                {/* Coluna do topo */}
                <div className="top-column">
                    <div className="titulo-trilha">
                        <h2>Capelas em Pernambuco</h2>
                        <p className="date">11-04</p>
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
                            <button className="seta">
                                ❮
                            </button>
                            <div className="card">
                                <img src={Capela1} alt="Capela 1" />
                                <h4>Capela de São Benedito</h4>
                                <p>Capela histórica verde e branca construída no século XVII, com vista para o mar.</p>
                                <button className="trilha-btn">Adicionar à Trilha</button>
                            </div>
                            <div className="card">
                                <img src={Capela2} alt="Capela 2" />
                                <h4>Capela Dourada</h4>
                                <p>Consagrada como um dos monumentos barrocos mais importantes.</p>
                                <button className="trilha-btn">Adicionar à Trilha</button>
                            </div>
                            <div className="card">
                                <img src={Capela3} alt="Capela 3" />
                                <h4>Igreja da Madre Deus</h4>
                                <p>Um templo católico da cidade do Recife, capital do estado de Pernambuco.</p>
                                <button className="trilha-btn">Adicionar à Trilha</button>
                            </div>
                            <button className="seta">
                                ❯
                            </button>
                        </div>
                    </div>
                </div>

                {/* Coluna direita - Mapa */}
                <div className="right-column">
                    <div className="map-wrapper">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.3833925172785!2d-34.8800266888442!3d-8.062318580527359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18bb910ecf63%3A0xfe0a857a7c19ce2b!2sCapela%20Dourada!5e0!3m2!1spt-BR!2sbr!4v1746074421198!5m2!1spt-BR!2sbr"
                            width="600" height="450" style={{ border: 0, width: '100%', height: '100%' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}