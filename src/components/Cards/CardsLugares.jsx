import "./CardsLugares.css";

import { CardsAtracoes } from './Categorias/CardsAtracoes';
import { CardsCidades } from './Categorias/CardsCidades';

export function CardsLugares() {
  return (
    <div className="container-cards" id="lugares">
      <CardsCidades />
      <CardsAtracoes />
    </div>
  );
}
