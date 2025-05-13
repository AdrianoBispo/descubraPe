import { Card, CardBody, Typography, Button } from "@material-tailwind/react";

import { TbTargetArrow } from "react-icons/tb";
import { PiMedalLight } from "react-icons/pi";
import { GoGift } from "react-icons/go";

import "./Convite.css";

export function Convite() {
  return (
    <div className="convite-container">
      <h1 className="titulo text-center mb-12">
        Desbloqueie experiências exclusivas em Pernambuco!
      </h1>
      <h3 className=" comoFunciona text-center mb-8">
        Como funciona?
      </h3>

      <div className="flex flex-row justify-center gap-20 flex-wrap mb-16">
        <Card className=" w-96">
          <CardBody className="cards-convite cardbody-color">
            <div className="flex justify-center gap-1 m-4">
              <TbTargetArrow size={28} />
              <h5 className="text-blue-900">
                Missões interativas
              </h5>
            </div>
            <p className="text-center">
              Participe de desafios culturais e turísticos para ganhar XP e
              subir de nível.
            </p>
          </CardBody>
        </Card>

        <Card className="w-96">
          <CardBody className="cardbody-color">
            <div className="flex justify-center gap-1 m-4">
              <PiMedalLight size={28} />
              <h5 color="blue-gray">
                Conquiste Badges
              </h5>
            </div>
            <p className="text-center">
              Ganhe selos colecionáveis ao visitar locais históricos ou
              completar atividades.
            </p>
          </CardBody>
        </Card>
        <Card className="w-96">
          <CardBody className="cardbody-color">
            <div className="flex justify-center gap-1 m-4">
              <GoGift size={28} />
              <h5 color="blue-gray">
                Resgate Prêmios
              </h5>
            </div>
            <p className="text-center">
              Troque seus pontos por experiências, descontos ou cupons
              exclusivos.
            </p>
          </CardBody>
        </Card>
      </div>
      <p color="blue" className="text-center mb-12 text-xl ">
        Monte trilhas, complete missões e ganhe recompensas enquanto descobre o
        que há de mais autêntico no nosso estado.
      </p>
      <div className="flex flex-row flew-wrap gap-12 justify-center">
        <Button color="blue">Começar agora</Button>
        <Button color="blue">Ver Recompensas</Button>
      </div>

      <div className="mt-20">
        <h2 className="text-center mb-6">
          Pronto para explorar e se divertir?
        </h2>
        <p className="text-center mb-6">
          Crie sua conta gratuita e comece a sua jornada cultural agora mesmo!
        </p>
        <div className="flex flex-row flew-wrap gap-12 justify-center">
          <Button color="blue">Começar agora</Button>
          <Button color="blue">Ver Recompensas</Button>
        </div>
      </div>
    </div>
  );
}
