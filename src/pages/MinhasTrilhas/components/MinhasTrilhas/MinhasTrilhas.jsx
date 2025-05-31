import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../../services/firebase";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import {
  Typography,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

import { FaRegTrashAlt } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { EditTrilhasModal } from "../../components/Modais/EditTrilhas/EditTrilhas";
import { ManageTrilhasModal } from "../../components/Modais/ManageTrilhas/ManageTrilhas";

import { cardMap } from "../../../../components/Cards/MiniCard/MiniCard";
import { MiniCard } from "../../../../components/Cards/MiniCard/MiniCard";

import "./MinhasTrilhas.css";

export function MinhasTrilhas() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [trilhas, setTrilhas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingTrilha, setEditingTrilha] = useState(null); // Para EditTrilhasModal
  const [managingCardsTrilha, setManagingCardsTrilha] = useState(null); // Para ManageTrilhasModal

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchTrilhas(currentUser.uid);
      } else {
        setUser(null);
        navigate("/landing-page");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const fetchTrilhas = async (uid) => {
    setLoading(true);
    try {
      const trilhasCollectionRef = collection(db, "users", uid, "trilhas");
      const querySnapshot = await getDocs(trilhasCollectionRef);
      const fetchedtrilhas = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      fetchedtrilhas.sort((a, b) => {
        if (a.id === "favorites") return -1;
        if (b.id === "favorites") return 1;
        return (a.createdAt?.toDate() || 0) - (b.createdAt?.toDate() || 0);
      });
      setTrilhas(fetchedtrilhas);
    } catch (error) {
      console.error("Erro ao buscar trilhas:", error);
    }
    setLoading(false);
  };

  const handleDeleteTrilha = async (trilhaId) => {
    if (!user || trilhaId === "favorites") return;
    if (
      window.confirm(
        "Tem certeza que deseja deletar esta trilha? Esta ação não pode ser desfeita."
      )
    ) {
      try {
        const trilhaDocRef = doc(db, "users", user.uid, "trilhas", trilhaId);
        await deleteDoc(trilhaDocRef);
        setTrilhas((prev) => prev.filter((trilha) => trilha.id !== trilhaId));
      } catch (error) {
        console.error("Erro ao deletar trilha:", error);
      }
    }
  };

  const handleSaveTrilhaDetails = async (trilhaId, title, description) => {
    if (!user) return;
    try {
      const trilhaDocRef = doc(db, "users", user.uid, "trilhas", trilhaId);
      await updateDoc(trilhaDocRef, { title, description });
      setTrilhas((prev) =>
        prev.map((trilha) =>
          trilha.id === trilhaId ? { ...trilha, title, description } : trilha
        )
      );
    } catch (error) {
      console.error("Erro ao salvar detalhes da trilha:", error);
    }
  };

  const handleSaveChangesCards = async (trilhaId, newCardIds) => {
    if (!user) return;
    try {
      const trilhaDocRef = doc(db, "users", user.uid, "trilhas", trilhaId);
      await updateDoc(trilhaDocRef, { cards: newCardIds });
      setTrilhas((prev) =>
        prev.map((trilha) =>
          trilha.id === trilhaId ? { ...trilha, cards: newCardIds } : trilha
        )
      );
    } catch (error) {
      console.error("Erro ao salvar os lugares na trilha:", error);
    }
  };

  return (
    <>
      <div className="minhas-trilhas__page-container">
        <Typography variant="h1" className="minhas-trilhas__main-title">
          Minha Trilha Personalizada
        </Typography>
        <Typography className="minhas-trilhas__subtitle" variant="lead">
          Explore Pernambuco no seu ritmo com os lugares que você mais deseja
          conhecer.
        </Typography>
        {loading ? (
          <Typography>Carregando trilhas...</Typography>
        ) : trilhas.length === 0 ? (
          <Typography>
            Você ainda não criou nenhuma trilha ou favoritou algum lugar.
          </Typography>
        ) : (
          trilhas.map((trilha) => (
            <div key={trilha.id} className="minhas-trilhas__trilha-item">
              <div className="minhas-trilhas__trilha-header">
                <div className="prose minhas-trilhas__trilha-title">
                  {/* Classe para estilizar o Markdown */}
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {trilha.title || "Trilha sem Nome"}
                  </ReactMarkdown>
                </div>
                <div className="minhas-trilhas__trilha-actions">
                  <Tooltip content="Gerenciar Trilha">
                    <IconButton
                      variant="text"
                      color="blue-gray"
                      onClick={() => setManagingCardsTrilha(trilha)}
                      className="minhas-trilhas__action-button-icon"
                    >
                      <IoSettingsOutline />
                    </IconButton>
                  </Tooltip>
                  {trilha.id !== "favorites" && (
                    <>
                      <Tooltip content="Editar Trilha">
                        <IconButton
                          variant="text"
                          color="blue-gray"
                          onClick={() => setEditingTrilha(trilha)}
                          className="minhas-trilhas__action-button-icon"
                        >
                          <BsPencil />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Deletar Trilha">
                        <IconButton
                          variant="text"
                          color="red"
                          onClick={() => handleDeleteTrilha(trilha.id)}
                          className="minhas-trilhas__action-button-icon"
                        >
                          <FaRegTrashAlt />
                        </IconButton>
                      </Tooltip>
                    </>
                  )}
                </div>
              </div>
              <div className="prose prose-sm minhas-trilhas__trilha-description-container">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {trilha.description || ""}
                </ReactMarkdown>
              </div>

              {!trilha.cards || trilha.cards.length === 0 ? (
                <Typography>Esta trilha está vazia.</Typography>
              ) : (
                <div className="minhas-trilhas__cards">
                  {trilha.cards.map((cardId) => (
                    <MiniCard key={cardId} card={cardMap.get(cardId)} />
                  ))}
                </div>
              )}
            </div>
          ))
        )}
        {/* Modais */}
        {editingTrilha && (
          <EditTrilhasModal
            trilha={editingTrilha}
            open={!!editingTrilha}
            onClose={() => setEditingTrilha(null)}
            onSave={handleSaveTrilhaDetails}
          />
        )}
        {managingCardsTrilha && (
          <ManageTrilhasModal
            trilha={managingCardsTrilha}
            allCardsMap={cardMap}
            open={!!managingCardsTrilha}
            onClose={() => setManagingCardsTrilha(null)}
            onSave={handleSaveChangesCards}
          />
        )}
      </div>
    </>
  );
}
