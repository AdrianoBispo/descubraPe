import { useNavigate } from "react-router-dom";
import { lugares } from "../../../mocks/lugares";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import "./MiniCard.css";

// Mapeia IDs para dados completos para fácil acesso
export const cardMap = new Map(lugares.map((card) => [card.id, card]));

export function MiniCard({ card }) {
  const navigate = useNavigate();

  // Simplificado - agora só exibe
  if (!card) return null; // Retorna nulo se o card não for encontrado
  return (
    <Card
      className="mini-card"
      onClick={() => navigate(`/lugar-escolhido/${card.title}`)}
    >
      <CardHeader
        floated={false}
        color="blue-gray"
        className="mini-card__header"
      >
        <img src={card.image} alt={card.title} className="mini-card__image" />
      </CardHeader>
      <CardBody className="mini-card__body">
        <Typography variant="h6" color="blue-gray" className="mini-card__title">
          {card.title}
        </Typography>
      </CardBody>
    </Card>
  );
}
