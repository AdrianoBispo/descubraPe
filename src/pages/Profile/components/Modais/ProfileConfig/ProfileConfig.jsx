import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";

import { IoMdClose } from "react-icons/io";
import { BsPencil } from "react-icons/bs";

import "./ProfileConfig.css";

export function ProfileConfig({ open, handleOpen }) {
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
            <span className="text-xl">Bruna Santos</span>
            <BsPencil size={16} className="mt-1 cursor-pointer" />
          </div>
          <hr />
          <div className="flex flex-row justify-between">
            <p className="text-xl">Telefone:</p>
            <span className="text-lg">(81) 9XXXX-XXXX</span>
            <BsPencil size={16} className="mt-1 cursor-pointer" />
          </div>
          <hr />
          <div className="flex flex-row justify-between">
            <p className="text-xl">E-mail:</p>
            <span className="text-xl">brunasantos@gmail.com</span>
            <BsPencil size={16} className="mt-1 cursor-pointer" />
          </div>
          <hr />
          <div className="flex flex-row justify-between ">
            <p className="text-xl">Senha: </p>
            <span className="text-xl">********</span>
            <BsPencil size={16} className="mt-1 cursor-pointer" />
          </div>
          <hr />
        </DialogBody>

        <DialogFooter className="flex  gap-12">
          <button className="" onClick={handleOpen}>
            Confirmar
          </button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
