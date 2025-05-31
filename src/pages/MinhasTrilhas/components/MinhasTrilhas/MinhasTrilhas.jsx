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
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { EditTrilhasModal } from "../../Modais/EditTrilhas/EditTrilhas";
import { ManageTrilhasModal } from "../../Modais/ManageTrilhas/ManageTrilhas";

import { lugares } from "../../../../mocks/lugares";

import "./MinhasTrilhas.css";

// Ícones
const TrashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12.576 0c1.355.342 2.694.694 4.022.997m-4.022-.997L4.772 5.79m0 0L3 3m12.75 0L15 3m0 0V.75A.75.75 0 0014.25 0H9.75A.75.75 0 009 .75V3m4.5 0v2.25m6.75-3H21a.75.75 0 00.75-.75V3"
    />
  </svg>
);
const PencilIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
    />
  </svg>
);
const CogIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.39.39 1.023 0 1.414l-.527.737c-.25.35-.272.806-.108 1.204.165.397.506.71.93.78l.893.15c.543.09.94.56.94 1.11v1.093c0 .55-.397 1.02-.94 1.11l-.893.149c-.424.07-.764.384-.93.78-.164.398-.142.854.108 1.204l.527.738c.39.39.39 1.022 0 1.414l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.204-.108-.397.165-.71.506-.78.93l-.15.893c-.09.543-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.149-.894c-.07-.424-.384-.764-.78-.93-.398-.164-.854-.142-1.204.108l-.738.527a1.125 1.125 0 01-1.45-.12l-.773-.774a1.125 1.125 0 010-1.414l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.11v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.764-.384.93-.78.164-.398.142-.854-.108-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.205.108.397-.165.71-.506.78-.93l.15-.893z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

// Mapeia IDs para dados completos para fácil acesso
const cardMap = new Map(lugares.map((card) => [card.id, card]));

function MiniCard({ card }) {
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
        fetchtrilhas(currentUser.uid);
      } else {
        setUser(null);
        navigate("/landing-page");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const fetchtrilhas = async (uid) => {
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

  const handleDeletetrilha = async (trilhaId) => {
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

  const handleSavetrilhaDetails = async (trilhaId, title, description) => {
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
                      <CogIcon />
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
                          <PencilIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Deletar Trilha">
                        <IconButton
                          variant="text"
                          color="red"
                          onClick={() => handleDeletetrilha(trilha.id)}
                          className="minhas-trilhas__action-button-icon"
                        >
                          <TrashIcon />
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
            onSave={handleSavetrilhaDetails}
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
