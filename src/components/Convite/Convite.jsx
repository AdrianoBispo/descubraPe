import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import {alvoIcon, medalhaIcon, presenteIcon} from "../../assets/index";

import "./Convite.css";
import "../Header/Header.css";

export function Convite() {
  return (
    <div className="convite-container">
      <h1 className="titulo text-center mt-14 mb-12">
        Desbloqueie experiências exclusivas em Pernambuco!
      </h1>
      <h3 className=" comoFunciona text-center mb-8">
        Como funciona?
      </h3>

      <div className="flex flex-row justify-center gap-20 flex-wrap mb-16">
        <Card className=" w-96">
          <CardBody className="cards-convite cardbody-color">
            <div className="flex justify-center gap-1 m-4">
              <img src={alvoIcon} className="Icons"/>
              <h5>
                Missões interativas
              </h5>
            </div>
            <p className="text-center text">
              Participe de desafios culturais e turísticos para ganhar XP e
              subir de nível.
            </p>
          </CardBody>
        </Card>

        <Card className="w-96">
          <CardBody className="cards-convite cardbody-color">
            <div className="flex justify-center gap-1 m-4">
              <img src={medalhaIcon} className="Icons"/>
              <h5>
                Conquiste Badges
              </h5>
            </div>
            <p className="text-center text">
              Ganhe selos colecionáveis ao visitar locais históricos ou
              completar atividades.
            </p>
          </CardBody>
        </Card>
        <Card className="w-96">
          <CardBody className="cards-convite cardbody-color">
            <div className="flex justify-center gap-1 m-4">
              <img src={presenteIcon} className="Icons"/>
              <h5>
                Resgate Prêmios
              </h5>
            </div>
            <p className="text-center text">
              Troque seus pontos por experiências, descontos ou cupons
              exclusivos.
            </p>
          </CardBody>
        </Card>
      </div>
      <p className="text-center mb-12 text-xl text ">
        Monte trilhas, complete missões e ganhe recompensas enquanto descobre o
        que há de mais autêntico no nosso estado.
      </p>
      <div className="flex flex-row flew-wrap gap-12 justify-center mb-12">
        <button className="BotaoConvite">Começar agora</button>
        <button className="BotaoConvite">Ver Recompensas</button>
      </div>
    </div>
  );
}
