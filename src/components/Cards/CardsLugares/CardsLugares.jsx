import "./CardsLugares.css";

import { CardsAtracoes } from '../CardsCategorias/CardsAtracoes';
import { CardsCidades } from '../CardsCategorias/CardsCidades';

export function CardsLugares() {
  return (
    <div className="container-cards" id="lugares">
      <CardsCidades />
      <CardsAtracoes />
    </div>
  );
}
