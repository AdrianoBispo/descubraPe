import { useState, useEffect } from "react";
import { useAuth } from "../../../../../services/useAuth";
import { db } from "../../../../../services/firebase";
import { doc, getDoc } from "firebase/firestore";

import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button
} from "@material-tailwind/react";

import { IoMdClose } from "react-icons/io";
import { BsPencil } from "react-icons/bs";

import "./ProfileConfig.css";

export function ProfileConfig({ open, handleOpen }) {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (currentUser) {
        try {
          const docRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserData(docSnap.data());
          } else {
            console.log("Nenhum documento encontrado!");
          }
        } catch (err) {
          console.error("Erro ao buscar dados:", err);
        }
      }
    };

    fetchUserData();
  }, [currentUser]);

  return (
    <>
      <Dialog className="modal__container" open={open} handler={handleOpen}>
        <DialogHeader className="modal__header">
          <h2 className="modal__titulo">Dados Pessoais</h2>
          <IoMdClose
            size={24}
            className="absolute end-3 top-3 cursor-pointer"
            onClick={handleOpen}
          />
        </DialogHeader>

        <DialogBody className="h-[20rem] overflow-y-auto mx-12 flex flex-col justify-center gap-4">
          <div className="flex flex-row justify-between">
            <p className="text-xl">Nome:</p>
            <span className="text-xl">
              {" "}
              {userData?.nome ||
                currentUser?.displayName ||
                "Nome não definido"}
            </span>
            <BsPencil size={16} className="mt-1 cursor-pointer" />
          </div>
          <hr />
          <div className="flex flex-row justify-between">
            <p className="text-xl">Telefone:</p>
            <span className="text-lg">
              {userData?.telefone || "Não informado"}
            </span>
            <BsPencil size={16} className="mt-1 cursor-pointer" />
          </div>
          <hr />
          <div className="flex flex-row justify-between">
            <p className="text-xl">E-mail:</p>
            <span className="text-xl">
              {userData?.email || "Não informado"}
            </span>
            <BsPencil size={16} className="mt-1 cursor-pointer" />
          </div>
          <hr />
          <div className="flex flex-row justify-between ">
            <p className="text-xl">Senha: </p>
            <span className="text-xl">********</span>
            <BsPencil size={16} className="mt-1 cursor-pointer" />
          </div>
          <hr />
          <div className="flex flex-row justify-between ">
            <p className="text-xl">Bio: </p>
            <span className="text-xl">
              {userData?.resumo || "Não informado"}
            </span>
            <BsPencil size={16} className="mt-1 cursor-pointer" />
          </div>
          <hr />
        </DialogBody>

        <DialogFooter className="flex  gap-12">
          <Button
            variant="gradient"
            color="green"
            onClick={handleOpen}
          >
            <span>Salvar</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
