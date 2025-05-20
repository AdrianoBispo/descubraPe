import { minhasTrilhas } from "../../../../mocks/minhasTrilhas";

import "./MinhasTrilhas.css";

export function MinhasTrilhas() {
  return (
    <div className="trilha-container">
      <h1 className="titulo text-center">Minha Trilha Personalizada</h1>
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
              <button className="btn-remover">✖</button>
            </div>
          </div>
        ))}
      </div>

      <div className="botoes">
        <button className="btn-editar">Editar Trilha</button>
        <button className="btn-salvar">Salvar Trilha</button>
        <button className="btn-compartilhar">Compartilhar Trilha</button>
      </div>
    </div>
  );
}
