import { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Card,
  CardBody,
  Typography,
  Input,
} from "@material-tailwind/react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// Componente para um card 'arrastável' (Passo 1)
function SortableCard({ id, card, onRemove }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    touchAction: "none",
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="w-full max-w-[10rem] shadow-md mb-4 relative cursor-grab active:cursor-grabbing"
    >
      <img
        src={card.image}
        alt={card.title}
        className="h-24 w-full object-cover"
      />
      <CardBody className="p-2 text-center">
        <Typography variant="small" className="font-medium truncate">
          {card.title}
        </Typography>
      </CardBody>
      <IconButton
        size="sm"
        color="red"
        variant="filled"
        className="!absolute top-1 right-1 rounded-full z-10 w-5 h-5"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(id);
        }}
        onPointerDown={(e) => {
          e.stopPropagation();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-3 h-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </IconButton>
    </Card>
  );
}

// Componente para um card selecionável (Passo 2)
function SelectableCard({ card, onSelect, isSelected }) {
  return (
    <div
      key={card.id}
      className="cursor-pointer border-2 p-1 rounded-lg shadow-sm bg-white"
      style={{ borderColor: isSelected ? "blue" : "transparent" }}
      onClick={(e) => {
        console.log(`Clicou no Selectable - ID: ${card.id}`);
        e.preventDefault();
        e.stopPropagation();
        onSelect(card);
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
      }}
    >
      <img
        src={card.image}
        alt={card.title}
        className="h-32 w-full object-cover rounded-t-md"
      />
      <div className="p-2 text-center relative">
        <Typography variant="small" className="font-bold truncate">
          {card.title}
        </Typography>
      </div>
    </div>
  );
}

// --- Componente Principal ---
function ManageCardsModal({ album, allCardsMap, open, onClose, onSave }) {
  const [step, setStep] = useState(1); // 1: Gerenciar, 2: Adicionar
  const [cards, setCards] = useState([]); // Cards atuais no album (Passo 1)
  const [selectedCardsToAdd, setSelectedCardsToAdd] = useState([]); // Cards selecionados (Passo 2)
  const [searchTerm, setSearchTerm] = useState(""); // Busca (Passo 2)

  // Carrega os cards iniciais quando o album muda
  useEffect(() => {
    if (album && allCardsMap) {
      const currentCards = album.cards
        .map((id) => ({ ...allCardsMap.get(id), id }))
        .filter((card) => card.title);
      setCards(currentCards);
    }
  }, [album, allCardsMap]);

  // Reset para Passo 1 quando o modal reabre (opcional, mas bom)
  useEffect(() => {
    if (open) {
      setStep(1);
      setSelectedCardsToAdd([]);
      setSearchTerm("");
    }
  }, [open]);

  // --- Lógica D&D (Passo 1) ---
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setCards((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleRemoveCard = (cardIdToRemove) => {
    setCards((prev) => prev.filter((card) => card.id !== cardIdToRemove));
  };

  // --- Lógica Seleção (Passo 2) ---
  const handleCardSelect = (card) => {
    setSelectedCardsToAdd((prev) =>
      prev.some((c) => c.id === card.id)
        ? prev.filter((c) => c.id !== card.id)
        : [...prev, card]
    );
  };

  const availableCards = Array.from(allCardsMap.values());
  const currentCardIds = cards.map((c) => c.id);
  const cardsToShow = availableCards
    .filter((card) => !currentCardIds.includes(card.id)) // Mostra apenas os que NÃO estão no álbum
    .filter((card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // --- Lógica Navegação & Salvar ---
  const handleConfirmAdd = () => {
    if (selectedCardsToAdd.length > 0) {
      setCards((prev) => {
        const existingIds = new Set(prev.map((c) => c.id));
        const uniqueNewCards = selectedCardsToAdd.filter(
          (nc) => !existingIds.has(nc.id)
        );
        return [...prev, ...uniqueNewCards];
      });
    }
    setSelectedCardsToAdd([]); // Limpa a seleção
    setSearchTerm(""); // Limpa a busca
    setStep(1); // Volta para o passo 1
  };

  const handleSaveChanges = () => {
    const cardIds = cards.map((card) => card.id);
    onSave(album.id, cardIds);
    onClose();
  };

  const handleClose = () => {
    // Se estiver no passo 2, volta pro passo 1. Se estiver no passo 1, fecha.
    if (step === 2) {
      setStep(1);
      setSelectedCardsToAdd([]);
      setSearchTerm("");
    } else {
      onClose();
    }
  };

  if (!album) return null;

  return (
    <Dialog
      open={open}
      handler={handleClose} // Usa nosso handler customizado
      size="lg"
      // TENTATIVA: Desativar backdrop click. Se isso funcionar,
      // significa que o bug é o clique interno ser tratado como backdrop.
      dismiss={{ onBackdropClick: false }}
    >
      <DialogHeader className="flex justify-center">
        <Typography variant="h4">Gerenciar Trilha</Typography>
      </DialogHeader>

      {/* --- Corpo do Modal (Condicional) --- */}
      <DialogBody divider className="h-[30rem] overflow-y-scroll">
        {step === 1 && (
          <>
            <Button variant="text" onClick={() => setStep(2)} className="mb-6">
              Adicionar mais lugares
            </Button>
            {cards.length === 0 ? (
              <Typography>
                Este álbum está vazio. Clique em "Adicionar mais lugares" para começar.
              </Typography>
            ) : (
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
              >
                <SortableContext
                  items={cards.map((c) => c.id)}
                  strategy={rectSortingStrategy}
                >
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                    {cards.map((card) => (
                      <SortableCard
                        key={card.id}
                        id={card.id}
                        card={card}
                        onRemove={handleRemoveCard}
                      />
                    ))}
                  </div>
                </SortableContext>
              </DndContext>
            )}
          </>
        )}

        {step === 2 && (
          <>
            <div className="mb-4">
              <Input
                label="Digite o nome do lugar"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon={<i className="fas fa-search" />}
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {cardsToShow.length > 0 ? (
                cardsToShow.map((card) => (
                  <SelectableCard
                    key={card.id}
                    card={card}
                    onSelect={handleCardSelect}
                    isSelected={selectedCardsToAdd.some(
                      (c) => c.id === card.id
                    )}
                  />
                ))
              ) : (
                <Typography variant="h5" className="">
                  Nenhum Lugar novo disponível para adicionar.
                </Typography>
              )}
            </div>
          </>
        )}
      </DialogBody>

      {/* --- Rodapé do Modal (Condicional) --- */}
      <DialogFooter>
        {step === 1 && (
          <>
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
              onClick={handleSaveChanges}
            >
              <span>Salvar</span>
            </Button>
          </>
        )}
        {step === 2 && (
          <>
            <Button
              variant="text"
              color="gray"
              onClick={() => setStep(1)}
              className="mr-1"
            >
              <span>Voltar</span>
            </Button>
            <Button
              variant="gradient"
              color="green"
              onClick={handleConfirmAdd}
              disabled={selectedCardsToAdd.length === 0}
            >
              <span>Confirmar</span>
            </Button>
          </>
        )}
      </DialogFooter>
    </Dialog>
  );
}

export default ManageCardsModal;
