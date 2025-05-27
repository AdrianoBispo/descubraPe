import { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Input,
  Textarea,
} from "@material-tailwind/react";

function EditAlbumModal({ album, open, onClose, onSave }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (album) {
      setTitle(album.title || "");
      setDescription(album.description || "");
    }
  }, [album]);

  const handleSave = () => {
    if (title.trim()) {
      onSave(album.id, title, description);
      onClose();
    }
  };

  if (!album) return null;

  return (
    <Dialog open={open} handler={onClose}>
      <DialogHeader className="flex justify-center">
        <Typography variant="h4">Editar Trilha</Typography>
      </DialogHeader>
      <DialogBody divider>
        <div className="flex flex-col gap-6">
          <Input
            label="Nome da Trilha"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Textarea
            label="Descrição (Máx. 250 caracteres)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={250} 
          />
        </div>
        <Typography variant="small" color="gray" className="mt-2">
          Use a sintaxe Markdown para formatar o título e a descrição.
        </Typography>
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" onClick={onClose} className="mr-1">
          <span>Cancelar</span>
        </Button>
        <Button
          variant="gradient"
          color="green"
          onClick={handleSave}
          disabled={title.trim() === ""}
        >
          <span>Salvar</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export default EditAlbumModal;
