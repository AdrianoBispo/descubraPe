import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Typography,
  IconButton,
  Rating,
} from "@material-tailwind/react";

import { melhoresAtracoes } from "../../../mocks/melhoresAtracoes";

import { FaHeart } from "react-icons/fa";

export function CardsAtracoes() {
  return (
    <>
      <div className="mt-32 mb-2">
        <h1 className="font-bold titulo">Pernambuco: Melhores Atrações</h1>
        <p className="text-xl texto-cards">
          Conheça os locais mais visitados do estado
        </p>
      </div>

      {melhoresAtracoes.map((atracoes) => (
        <div key={atracoes.id} className="inline-block">
          <Card className="w-full max-w-[20rem] shadow-lg m-7">
            <CardHeader floated={false} color="blue-gray">
              <img src={atracoes.image} alt="ui/ux review check" />

              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
              <IconButton
                size="sm"
                variant="text"
                color="white"
                className="!absolute top-4 right-4 rounded-full color-heart"
              >
                <FaHeart />
              </IconButton>
            </CardHeader>

            <CardBody>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex flex-col">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-bold"
                  >
                    {atracoes.title}
                  </Typography>

                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {atracoes.localizacao}
                  </Typography>
                  <div className="flex gap-1.5 ">
                    <Rating value={parseInt(atracoes.rating)} readonly />
                    <p className="text-green-600">({atracoes.rating})</p>
                  </div>
                </div>
              </div>

              <Typography color="gray">{atracoes.description}</Typography>
            </CardBody>

            <CardFooter className="pt-0">
              <a href="#" className="inline-block">
                <Button
                  size="sm"
                  variant="text"
                  className="flex items-center gap-2"
                  color="blue"
                >
                  Adicionar a Trilha
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      ))}
    </>
  );
}
