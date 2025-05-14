import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  IconButton,
  Rating,
} from "@material-tailwind/react";

import { FaHeart } from "react-icons/fa";

import { cidadesBadaladas, dataBookingCards } from "../../db/lugares";

import "./BookingCards.css";

export function BookingCards() {
  return (
    <div className="container-bookingCards">
      <h1 className="font-bold titulo">Pernambuco: Cidades Badaladas</h1>
      <p className="ml-8 text-xl">
        Explore as cidades mais visitadas do estado
      </p>

      {cidadesBadaladas.map((cidade) => (
        <div className="inline-block">
          <Card key={cidade.id} className="w-full max-w-[26rem] shadow-lg m-7">
            <CardHeader floated={false} color="blue-gray">
              <img
                src={cidade.image}
                alt="ui/ux review check"
                className="w-300 h-30"
              />

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
                    {cidade.title}
                  </Typography>

                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {cidade.localizacao}
                  </Typography>
                </div>

                <Typography
                  color="blue-gray"
                  className="flex items-center gap-1.5 font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {cidade.rating}
                </Typography>
              </div>

              <Typography color="gray">{cidade.description}</Typography>
            </CardBody>
          </Card>
        </div>
      ))}

      <div className="mt-32 mb-2">
        <h1 className="font-bold titulo">Pernambuco: Melhores Atrações</h1>
        <p className="ml-8 text-xl">
          Conheça os locais mais visitados do estado
        </p>
      </div>

      {dataBookingCards.map((dataBookingCard) => (
        <div className="inline-block">
          <Card
            key={dataBookingCard.id}
            className="w-full max-w-[26rem] shadow-lg m-7"
          >
            <CardHeader floated={false} color="blue-gray">
              <img src={dataBookingCard.image} alt="ui/ux review check" />

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
                    {dataBookingCard.title}
                  </Typography>

                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {dataBookingCard.localizacao}
                  </Typography>
                  <div className="flex gap-1.5 ">
                    <Rating value={parseInt(dataBookingCard.rating)} readonly />
                    <p className="text-green-600">({dataBookingCard.rating})</p>
                  </div>
                </div>
              </div>

              <Typography color="gray">
                {dataBookingCard.description}
              </Typography>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
}
