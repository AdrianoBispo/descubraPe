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

import "./CardsCategorias.css"

import { CreateTrilhasModal } from "../../../pages/MinhasTrilhas/components/Modais/CreateTrilhas/CreateTrilhas";
import { CardsModelLugares } from '../CardsModelLugares/CardsModelLugares';

import { lugares } from "../../../mocks/lugares";

export function CardsCidades() {
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
      const userDocRef = doc(db, "users", uid, "trilhas", "favorites");
      const docSnap = await getDoc(userDocRef);
      if (docSnap.exists()) {
        setFavorites(docSnap.data().cards || []);
      } else {
        // Se a trilha de favoritos não existe, ele cria
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
    const userDocRef = doc(db, "users", user.uid, "trilhas", "favorites");
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

  const handleCreateTrilha = async (selectedCards, title, description) => {
    if (!user) return;
    try {
      const trilhasCollectionRef = collection(db, "users", user.uid, "trilhas");
      await addDoc(trilhasCollectionRef, {
        title: title,
        description: description,
        cards: selectedCards.map((card) => card.id), // Salva apenas os IDs
        createdAt: new Date(),
      });
      console.log("Trilha criada com sucesso!");
      setShowModal(false);
      navigate("/minhas-trilhas"); // Opcional: navegar para a galeria após criar
    } catch (error) {
      console.error("Erro ao criar trilha:", error);
    }
  };

  return (
    <>
      <div className="cards-categorias__header">
        <h1 className="cards-categorias__title">Cidades Badaladas</h1>
        <p className="cards-categorias__subtitle">
          Conheça as cidades mais visitadas do estado
        </p>
      </div>

      <div className="cards-categorias">
        {lugares
          .filter((lugar) => lugar.categoria === "cidade")
          .map((lugar) => (
            <CardsModelLugares
              key={lugar.id}
              lugar={lugar}
              onFavorite={handleFavorite}
              isFavorited={favorites.includes(lugar.id)}
              onAddToGallery={handleAddToGallery}
            />
          ))}
      </div>
      {showModal && (
        <CreateTrilhasModal
          availableCards={lugares}
          onClose={handleCloseModal}
          onSubmit={handleCreateTrilha}
        />
      )}
    </>
  );
}
