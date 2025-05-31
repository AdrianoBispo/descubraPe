import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../services/useAuth";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Rating } from "@material-tailwind/react";

import "./CardsModelLugares.css"

export function CardsModelLugares({
  lugar,
  onFavorite,
  isFavorited,
  onAddToGallery,
}) {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { id, title, image, localizacao, description, rating, qtdeAvaliacao } =
    lugar;

  return (
    <>
      <div className="model-card" key={id}>
        <div
          className="model-card__favorite-button"
          onClick={
            currentUser
              ? () => onFavorite(id, !isFavorited)
              : () => navigate("/login")
          }
        >
          {isFavorited ? (
            <FaHeart size={24} color="blue" />
          ) : (
            <FaRegHeart size={24} color="blue" />
          )}
        </div>
        <img
          onClick={() => navigate(`/lugar-escolhido/${lugar.title}`)}
          className="model-card__image"
          src={image}
          alt={title}
        />
        <h4 className="model-card__title">{title}</h4>
        <div className="model-card__rating-line">
          <Rating className="model-card__rating-stars" value={parseInt(rating)} readonly />
          <p className="model-card__review-count">({qtdeAvaliacao})</p>
        </div>
        <p className="model-card__location">{localizacao}</p>
        <p className="model-card__description">{description}</p>
        <button
          className="model-card__action-button"
          onClick={
            currentUser ? () => onAddToGallery() : () => navigate("/login")
          }
        >
          Adicionar à Trilha
        </button>
      </div>
    </>
  );
}
