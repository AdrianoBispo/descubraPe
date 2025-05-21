import { presenteIcon2, estrelaIcon, clipeIcon } from "../../assets/index";

import "./FormParcerias.css";

export function FormParcerias() {
    return (
        <div className="bg-white min-h-screen flex flex-col items-center px-4 py-10 Principal">
            <div className="max-w-4xl w-full">
                <h2 className="font-bold text-center Titulo1">
                    Seja um parceiro do Descubra PE
                </h2>
                <p className="text-center text-blue-700 mt-2 mb-10">
                    Cadastre sua empresa e junte-se à maior plataforma de experiências turísticas e culturais de Pernambuco.
                </p>

                <h3 className="text-xl font-semibold  mb-4 Texto">Vantagens para parceiros</h3>

                <div className="grid md:grid-cols-2 gap-4 mb-1">
                    <div className="bg-gray-300 rounded-lg p-4 shadow-sm">
                        <h4 className="font-bold mb-1 flex items-center gap-2">
                            <img src={clipeIcon} className="Icon" /> Conecte-se com exploradores
                        </h4>
                        <p className="text-sm text-gray-700">
                            Seu negócio será indicado diretamente aos usuários que buscam experiências autênticas em Pernambuco.
                        </p>
                    </div>

                    <div className="bg-gray-300 rounded-lg p-4 shadow-sm">
                        <h4 className="font-bold mb-1 flex items-center gap-2">
                            <img src={estrelaIcon} className="Icon" /> Ganhe visibilidade nas trilhas
                        </h4>
                        <p className="text-sm text-gray-700">
                            Seu serviço poderá aparecer nos roteiros personalizados criados por nossos usuários durante a exploração.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-1 gap-4 mt-4 mb-2"></div>
                <div className="bg-gray-300 rounded-lg p-4 shadow-sm">
                    <h4 className="font-bold mb-1 flex items-center gap-2">
                        <img src={presenteIcon2} className="Icon" /> Ofereça cupons exclusivos
                    </h4>
                    <p className="text-sm text-gray-700">
                        “Incentivo de visitas através de promoções e cupons exclusivos para os exploradores da plataforma através de missões.”
                    </p>
                </div>

            <h3 className="text-xl font-semibold mt-10 mb-4 Texto">Formulário de Cadastro</h3>

            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Nome da empresa"
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    placeholder="E-mail para contato"
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Telefone/WhatsApp"
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Setor de atuação</option>
                    <option>Artesanato</option>
                    <option>Cultura e eventos</option>
                    <option>Gastronomia</option>
                    <option>Hospedagem</option>
                    <option>Turismo</option>
                </select>
                <textarea
                    placeholder="Descreva os serviços que você oferece"
                    rows="4"
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                    type="submit"
                    className="w-full text-white font-semibold rounded-lg py-3 Botao"
                >
                    Quero ser parceiro
                </button>
            </form>
        </div>
        </div >
    );
};
