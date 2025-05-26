import { minhasTrilhas } from "../../../../mocks/minhasTrilhas";
import { Header } from "../../../../components/Header/Header";

import { BsPencil } from "react-icons/bs";

import "./MinhasTrilhas.css";

export function MinhasTrilhas() {
  return (
    <>
    <Header />
    <div className="trilha-container">
      <h1 className="titulo mt-16 mr-8 text-center">Minha Trilha Personalizada</h1>
      <p className="descricao">
        Explore Pernambuco no seu ritmo com os lugares que você mais deseja
        conhecer.
      </p>
      <h2 className="data">Dia 1: Sábado, 30 de Setembro</h2>

      <div className="trilha-lista">
        {minhasTrilhas.map((ponto, index) => (
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
              <button className="mt-1 mr-12 cursor-pointer btn-editar"><BsPencil size={16}/></button>
              <button className="btn-remover">✖</button>
            </div>
          </div>
        ))}
      </div>

      <div className="botoes">
        <button className="btn-salvar">Salvar Trilha</button>
        <button className="btn-compartilhar">Compartilhar Trilha</button>
      </div>
    </div>
    </>
  );
}
