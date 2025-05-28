import { MdArrowBackIos } from "react-icons/md";
import { IoShareOutline } from "react-icons/io5";
import { BsPencil } from "react-icons/bs";

import { useNavigate, useParams } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Rating,
} from "@material-tailwind/react";

import "./Local.css";

import { lugares } from "../../../../mocks/lugares";

export function Local() {
  const navigate = useNavigate();
  const { id } = useParams();
  const lugar = lugares.find((t) => t.title === id);

  return (
    <div className="local-container">
      {/* Botao de voltar */}
      <div className="flex flex-row items-center mb-7 cursor-pointer" onClick={() => navigate("/")}>
        <MdArrowBackIos size={18} />
        <span className="text-[#0033cc]">Ver todos os lugares </span>
      </div>

      {/* Titulo, subtitulo e avaliação */}
      <div className="w-full flex flex-row items-center">
        <div className="w-1/2 justify-center flex-col">
          <h1 className="font-bold text-[#0033cc] mb-4 ml-2 TituloPrincipal">
            {lugar.title}
          </h1>
          <div className="flex items-center">
            <span className="text-gray-500 text-sm pt-1 mr-1 ml-1">4.8</span>
            <Rating value={5} readonly className="mr-2" />
            <span className="pt-1 font-medium text-[#0033cc] ml-4 Avaliacao">
              50 Avaliações
            </span>
          </div>
        </div>
        <div className="Opcoes">
          <button className="text-[#0033cc] underline flex flex-row items-center">
            <IoShareOutline size={26} className="pb-0.5 mr-1" /> Compartilhar
          </button>
          <button className="text-[#0033cc] underline flex flex-row items-center">
            <BsPencil size={22} className="mr-1" /> Avaliação
          </button>
          <button className="outline rounded-full py-2 px-4 text-white bg-[#0033cc]">
            Adicionar a trilha
          </button>
        </div>
      </div>

      {/* Imagens */}
      <div className="flex flex-row items-center justify-center gap-1 my-6">
        <img
          className="ImagemPrincipal"
          src={lugar.image}
          alt={lugar.title}
        />
        <div className="Imagens">
          <img
            src={lugar.image}
            alt={lugar.title}
          />
          <img
            src={lugar.image}
            alt={lugar.title}
          />
        </div>
      </div>

      {/* Seção de Informações */}
      <h2 className="text-[#0033cc] text-3xl font-bold mb-5">Informações</h2>
      <div className="flex flex-row items-center">
        <div className="flex flex-col w-1/3 gap-2">
          <h3 className="text-[#0033cc] font-bold">Endereço:</h3>
          <p className="text-[#0033cc] Endereco">
            Altura da rua Siqueira Campos, R. do Imperador Pedro II, S/N - Santo
            Antônio, Recife - PE, 50010-240
          </p>
        </div>
        <div className="flex flex-col pb-12 gap-2 Horario">
          <h3 className="text-[#0033cc] font-bold">
            Horário de Funcionamento*:
          </h3>
          <p className="text-[#0033cc]">
            Funciona das 8h às 16h <br />(Segunda a Sexta-feira)
          </p>
        </div>
      </div>

      {/* Seção de Avaliação */}
      <div className="mt-32 flex flex-col w-82">
        <Card
          color="transparent"
          shadow={false}
          className="max-w-[88rem] border rounded-xl"
        >
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-2 mr-1"
          >
            <div className="flex w-full flex-col gap-0.5">
              <div className="ml-3 flex items-center gap-0">
                <Rating value={5} readonly />
              </div>
            </div>
            <p className="mr-3 text-nowrap" color="blue-gray">
              Abr 2025
            </p>
          </CardHeader>

          <CardBody className="mb-6 p-0">
            <h5 className="ml-3 text-blue-800 font-bold">
              Vale a pena lugar singular
            </h5>
            <p className="text-blue-600 ml-3 mt-2">
              Lugar imperdível em Recife. Lindamente adornada em ouro, é
              possível fazer fotos incríveis. O ingresso dá direito a guia e
              custa R$ 15,00. Aceitam pix
            </p>

            <div className="mt-4 flex flex-row items-center">
              <Avatar
                size="sm"
                variant="circular"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt="tania andrew"
                className="ml-3"
              />

              <p className="text-blue-600 ml-3">
                Por<span> Marcus</span>
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
