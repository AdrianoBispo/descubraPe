import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
  Rating,
} from "@material-tailwind/react";

import { useNavigate } from "react-router-dom";

import { FaHeart } from "react-icons/fa";

export function BookingCard({
  lugar,
  onFavorite,
  isFavorited,
  onAddToGallery,
}) {
  const navigate = useNavigate();
  const { id, title, image, localizacao, description, rating, qtdeAvaliacao } = lugar;

  return (
    <>
      <div className="card" key={id}>

        <IconButton
            size="sm"
            variant="text"
            color={isFavorited ? "yellow" : "white"}
            className="absolute ml-[12.8rem] mt-1 rounded-full color-heart"
            onClick={() => onFavorite(id, !isFavorited)}
          >
            <FaHeart />
          </IconButton>
        <img onClick={() => navigate(`/lugar-escolhido/${lugar.title}`)} className="max-h-[10rem]" src={image} alt={title} />
        <h4 className="truncate">{title}</h4>
        <div className="flex flex-row items-center">
          <Rating
            className="pb-1.5"
            value={parseInt(rating)}
            readonly
          />
          <p className="text-green-600">({qtdeAvaliacao})</p>
        </div>
        <p className="mb-1 truncate font-bold">{localizacao}</p>
        <p className="truncate">{description}</p>
        <button className="trilha-btn" onClick={() => onAddToGallery()}>Adicionar à Trilha</button>
      </div>
    </>
  );
}
