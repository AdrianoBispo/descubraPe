import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../services/useAuth";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Rating } from "@material-tailwind/react";

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
      <div className="card" key={id}>
        <div
          size="sm"
          variant="text"
          className="absolute ml-[12.8rem] mt-1 rounded-full cursor-pointer"
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
          className="max-h-[10rem]"
          src={image}
          alt={title}
        />
        <h4 className="truncate">{title}</h4>
        <div className="flex flex-row items-center">
          <Rating className="pb-1.5" value={parseInt(rating)} readonly />
          <p className="text-green-600">({qtdeAvaliacao})</p>
        </div>
        <p className="mb-1 truncate font-bold">{localizacao}</p>
        <p className="truncate">{description}</p>
        <button
          className="trilha-btn"
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
