import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../services/firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import {
  Typography,
  Button,
  Card,
  CardBody,
  CardHeader,
  IconButton,
} from "@material-tailwind/react";

import { lugares } from "../../mocks/lugares";

// Mapeia IDs para dados completos para fácil acesso
const cardMap = new Map(lugares.map((card) => [card.id, card]));

function MiniCard({ card, onRemove, albumId }) {
  if (!card) return null; // Retorna nulo se o card não for encontrado
  return (
    <Card className="w-full max-w-[15rem] shadow-md mb-4">
      <CardHeader floated={false} color="blue-gray" className="h-40">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover"
        />
        {onRemove &&
          albumId !== "favorites" && ( // Só mostra o X se for um album customizado
            <IconButton
              size="sm"
              color="red"
              variant="filled"
              className="!absolute top-2 right-2 rounded-full"
              onClick={() => onRemove(albumId, card.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          )}
      </CardHeader>
      <CardBody className="text-center p-4">
        <Typography variant="h6" color="blue-gray" className="font-medium">
          {card.title}
        </Typography>
      </CardBody>
    </Card>
  );
}

export function TravelLists() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchAlbums(currentUser.uid);
      } else {
        setUser(null);
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const fetchAlbums = async (uid) => {
    setLoading(true);
    try {
      const albumsCollectionRef = collection(db, "users", uid, "albums");
      const querySnapshot = await getDocs(albumsCollectionRef);
      const fetchedAlbums = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Garante que 'Favoritos' seja o primeiro
      fetchedAlbums.sort((a, b) => {
        if (a.id === "favorites") return -1;
        if (b.id === "favorites") return 1;
        return 0; // Mantém a ordem original para os outros
      });

      setAlbums(fetchedAlbums);
    } catch (error) {
      console.error("Erro ao buscar álbuns:", error);
    }
    setLoading(false);
  };

  const handleDeleteAlbum = async (albumId) => {
    if (!user || albumId === "favorites") return; // Não permite deletar favoritos

    if (window.confirm("Tem certeza que deseja deletar este álbum?")) {
      try {
        const albumDocRef = doc(db, "users", user.uid, "albums", albumId);
        await deleteDoc(albumDocRef);
        setAlbums((prev) => prev.filter((album) => album.id !== albumId)); // Atualiza o estado localmente
      } catch (error) {
        console.error("Erro ao deletar álbum:", error);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <Typography variant="h2">Minha Galeria</Typography>
      </div>

      {loading ? (
        <Typography>Carregando álbuns...</Typography>
      ) : albums.length === 0 ? (
        <Typography>
          Você ainda não criou nenhum álbum ou favoritou cards.
        </Typography>
      ) : (
        albums.map((album) => (
          <div
            key={album.id}
            className="mb-10 p-6 border rounded-lg shadow-lg bg-white"
          >
            <div className="flex justify-between items-center mb-4">
              <Typography variant="h4">{album.title}</Typography>
              {album.id !== "favorites" && ( // Botão de deletar apenas para álbuns customizados
                <Button
                  color="red"
                  size="sm"
                  onClick={() => handleDeleteAlbum(album.id)}
                >
                  Deletar Álbum
                </Button>
              )}
            </div>
            <Typography color="gray" className="mb-6">
              {album.description}
            </Typography>
            {!album.cards || album.cards.length === 0 ? (
              <Typography>Este álbum está vazio.</Typography>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {album.cards.map((cardId) => (
                  <MiniCard
                    key={cardId}
                    card={cardMap.get(cardId)} // Pega os dados do card pelo ID
                    albumId={album.id}
                    // onRemove={handleRemoveCard} // Implementar se necessário
                  />
                ))}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}
