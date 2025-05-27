import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
  Rating
} from "@material-tailwind/react";

import { useNavigate } from "react-router-dom";

import { FaHeart } from "react-icons/fa";

export function BookingCard({ lugar, onFavorite, isFavorited, onAddToGallery }) {
  const navigate = useNavigate()
  const { id, title, image, localizacao, description, rating } = lugar;

  return (
    <>
      <Card className="w-full max-w-[20rem] shadow-lg m-7" onClick={() => navigate(`/lugar-escolhido/${lugar.title}`)}>
        <CardHeader floated={false} color="blue-gray">
          <img src={image} alt="titulo" />

          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          <IconButton
            size="sm"
            variant="text"
            color={isFavorited ? "yellow" : "white"}
            className="!absolute top-4 right-4 rounded-full color-heart"
            onClick={() => onFavorite(id, !isFavorited)}
          >
            <FaHeart />
          </IconButton>
        </CardHeader>

        <CardBody className="">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex flex-col">
              <Typography variant="h5" color="blue-gray" className="font-bold">
                {title}
              </Typography>

              <Typography
                variant="h6"
                color="blue-gray"
                className="font-medium"
              >
                {localizacao}
              </Typography>
              <div className="flex gap-1.5 ">
                <Rating value={parseInt(rating)} readonly />
                <p className="text-green-600">({rating})</p>
              </div>
            </div>
          </div>

          <Typography color="gray" className="truncate">{description}</Typography>
        </CardBody>

        <CardFooter className="pt-0">
          <a href="#" className="inline-block">
            <Button
              size="sm"
              variant="text"
              className="flex items-center gap-2"
              color="blue"
              onClick={() => onAddToGallery()}
            >
              Adicionar a Trilha
            </Button>
          </a>
        </CardFooter>
      </Card>
    </>
  );
}