import "./CardsLugares.css";

import { CardsAtracoes } from '../CardsAtracoes/CardsAtracoes';
import { CardsCidades } from '../CardsCidades/CardsCidades';

export function CardsLugares() {
  return (
    <div className="container-cards" id="lugares">
      <CardsCidades />
      <CardsAtracoes />
    </div>
  );
}
