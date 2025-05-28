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

import { CreateTravelListModal } from "./../../../pages/MinhasTrilhas/components/CreateTravelListModal";
import { BookingCard } from "./BookingCard";

import { lugares } from "../../../mocks/lugares";

export function CardsAtracoes() {
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
          title: "# Favoritos",
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
      navigate("/minhas-trilhas"); // Opcional: navegar para a galeria após criar
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

      <div className="mx-8 flex flex-row flex-wrap gap-8">
        {lugares
          .filter((lugar) => lugar.categoria !== "cidade")
          .map((lugar) => (
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
        <CreateTravelListModal
          availableCards={lugares}
          onClose={handleCloseModal}
          onSubmit={handleCreateAlbum}
        />
      )}
    </>
      
  );
}
