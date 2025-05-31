import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import "./AddLugares.css";

export function AddTrilhasModal({
  availableCards,
  cardsToExclude,
  open,
  onClose,
  onAdd,
}) {
  const [selectedCards, setSelectedCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCardSelect = (card) => {
    setSelectedCards((prev) =>
      prev.some((c) => c.id === card.id)
        ? prev.filter((c) => c.id !== card.id)
        : [...prev, card]
    );
  };

  const cardsToShow = availableCards
    .filter((card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((card) => !cardsToExclude.includes(card.id));

  const handleConfirmAdd = () => {
    if (selectedCards.length > 0) {
      onAdd(selectedCards);
    }
  };

  return (
    <>
      <Dialog open={open} handler={onClose} size="lg">
        <>
          <DialogHeader>Selecione os Lugares para sua Trilha</DialogHeader>
          <DialogBody divider className="h-[40rem] overflow-scroll">
            <div className="mb-4">
              <Input
                label="Digite o nome do lugar"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon={<i className="fas fa-search" />}
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {cardsToShow.map((card) => (
                <Card
                  key={card.id}
                  className="cursor-pointer border-2"
                  style={{
                    borderColor: selectedCards.some((c) => c.id === card.id)
                      ? "blue"
                      : "transparent",
                  }}
                  onClick={() => handleCardSelect(card)}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-32 w-full object-cover"
                  />
                  <CardBody className="p-2 text-center">
                    <Typography variant="small" className="font-bold">
                      {card.title}
                    </Typography>
                  </CardBody>
                </Card>
              ))}
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={onClose}
              className="mr-1"
            >
              <span>Cancelar</span>
            </Button>
            <Button
              variant="gradient"
              color="green"
              onClick={handleConfirmAdd}
              disabled={selectedCards.length === 0}
            >
              <span>Próximo</span>
            </Button>
          </DialogFooter>
        </>
      </Dialog>
    </>
  );
}
