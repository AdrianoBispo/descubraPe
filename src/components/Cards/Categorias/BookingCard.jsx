import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../services/firebase";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  collection,
  addDoc,
} from "firebase/firestore";
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

import { FaHeart } from "react-icons/fa";

import { lugares } from "../../../mocks/lugares";
import { TravelListModal } from './../../../pages/TravelLists/components/TravelListModal/TravelListModal';

function BookingCard({ lugar, onFavorite, isFavorited, onAddToGallery }) {
  const { id, title, image, localizacao, description, rating } =
    lugar;

  return (
    <>
      <Card className="w-full max-w-[20rem] shadow-lg m-7">
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

        <CardBody>
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

          <Typography color="gray">{description}</Typography>
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

export function Cards() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchFavorites(currentUser.uid);
      } else {
        setUser(null);
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const fetchFavorites = async (uid) => {
    try {
      const userDocRef = doc(db, "users", uid, "albums", "favorites");
      const docSnap = await getDoc(userDocRef);
      if (docSnap.exists()) {
        setFavorites(docSnap.data().cards || []);
      } else {
        // Se o album de favoritos não existe, cria ele
        await setDoc(userDocRef, {
          title: "Favoritos",
          description: "Meus cards favoritos",
          cards: [],
          createdAt: new Date(),
        });
        setFavorites([]);
      }
    } catch (error) {
      console.error("Erro ao buscar favoritos:", error);
    }
  };

  const handleFavorite = async (cardId, isAdding) => {
    if (!user) return;
    const userDocRef = doc(db, "users", user.uid, "albums", "favorites");
    try {
      await updateDoc(userDocRef, {
        cards: isAdding ? arrayUnion(cardId) : arrayRemove(cardId),
      });
      setFavorites((prev) =>
        isAdding ? [...prev, cardId] : prev.filter((id) => id !== cardId)
      );
    } catch (error) {
      console.error("Erro ao atualizar favoritos:", error);
      // Tenta criar o doc se não existir (pouco provável com o fetchFavorites)
      if (error.code === "not-found") {
        await setDoc(userDocRef, { cards: [cardId] });
        setFavorites([cardId]);
      }
    }
  };

  const handleAddToGallery = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCreateAlbum = async (selectedCards, title, description) => {
    if (!user) return;
    try {
      const albumsCollectionRef = collection(db, "users", user.uid, "albums");
      await addDoc(albumsCollectionRef, {
        title: title,
        description: description,
        cards: selectedCards.map((card) => card.id), // Salva apenas os IDs
        createdAt: new Date(),
      });
      console.log("Album criado com sucesso!");
      setShowModal(false);
      navigate("/travel-lists"); // Opcional: navegar para a galeria após criar
    } catch (error) {
      console.error("Erro ao criar album:", error);
    }
  };

  return (
    <>
    <div className="mt-32 mb-2">
        <h1 className="font-bold titulo">Pernambuco: Melhores Atrações</h1>
        <p className="text-xl texto-cards">
          Conheça os locais mais visitados do estado
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {lugares.map((lugar) => (
          <BookingCard
            key={lugar.id}
            lugar={lugar}
            onFavorite={handleFavorite}
            isFavorited={favorites.includes(lugar.id)}
            onAddToGallery={handleAddToGallery}
          />
        ))}
      </div>
      {showModal && (
        <TravelListModal
          availableCards={lugares}
          onClose={handleCloseModal}
          onSubmit={handleCreateAlbum}
        />
      )}
    </>
      
  );
}
