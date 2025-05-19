import React from 'react';

import "./Planos.css";

const PlanosDeAssinatura = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center px-4 py-10 Principal">
      <div className="max-w-6xl w-full text-center">
        <h2 className="font-bold mb-2 Titulo">
          Assine e desbloqueie o melhor de Pernambuco
        </h2>
        <p className="text-blue-700 mb-10">
          Com a assinatura, você tem acesso a experiências exclusivas, cupons especiais e
          vantagens que vão transformar sua jornada.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Plano Gratuito */}
          <div className="border rounded-xl p-12 shadow-sm flex flex-col items-center">
            <h3 className="font-bold mb-2 Texto">Explorador Gratuito</h3>
            <p className="font-bold mb-1 Month">R$ 0 <span className="font-medium Month">/ mês</span></p>
            <ul className="text-sm text-gray-700 mt-4 mb-6 space-y-1 text-left">
              <li>Criação de até 3 trilhas personalizadas</li>
              <li>Visualização de atrações e avaliações</li>
              <li>Participação em missões básicas</li>
            </ul>
            <button className="bg-gray-400 text-gray-100 font-semibold py-2 px-4 rounded-md w-full Botao1">
              Já estou usando
            </button>
          </div>

          {/* Plano Plus */}
          <div className="border rounded-xl p-12 shadow-sm flex flex-col items-center">
            <h3 className="font-bold mb-2 Texto">Explorador Plus</h3>
            <p className="font-bold mb-1 Month">R$ 14,90 <span className="font-medium Month">/ mês</span></p>
            <ul className="text-sm text-gray-700 mt-4 mb-6 space-y-1 text-left">
              <li>Criação ilimitada de trilhas</li>
              <li>Cupons exclusivos em restaurantes e passeios</li>
              <li>Participação em missões premium</li>
              <li>Ranking de exploradores</li>
            </ul>
            <button className="text-white font-semibold mt-10 py-2 px-4 rounded-md w-full Botao">
              Assinar Plus
            </button>
          </div>

          {/* Plano Pro */}
          <div className="border rounded-xl p-12 shadow-sm flex flex-col items-center">
            <h3 className="font-bold mb-2 Texto">Explorador Pro</h3>
            <p className="font-bold mb-1 Month">R$ 29,90 <span className="font-medium Month">/ mês</span></p>
            <ul className="text-sm text-gray-700 mt-4 mb-6 space-y-1 text-left">
              <li>Todas as vantagens do Plus</li>
              <li>Acesso antecipado a eventos e trilhas especiais</li>
              <li>Recompensas exclusivas com parceiros</li>
              <li>Convites para experiências VIP</li>
            </ul>
            <button className="text-white font-semibold py-2 px-4 rounded-md w-full mt-10 Botao">
              Assinar Pro
            </button>
          </div>
        </div>

        <footer className="text-sm text-blue-700 mt-10">
          © 2025. Todos os direitos reservados.
        </footer>
      </div>
    </div>
  );
};

export default PlanosDeAssinatura;
