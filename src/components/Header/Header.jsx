import React from "react";
import "./Header.css";
import { Button } from "@material-tailwind/react";

export function Header() {

  return (
    <>
      <header className="flex fixed w-full top-0 left-0 justify-between items-center p-3 bg-white shadow-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-800 rounded-full Logo" />
          <span className="TituloLogo">Descubra PE</span>
        </div>
        <nav className="flex gap-12 justify-between">
          <a href="#sobre" className="Navbar">Trilha</a>
          <a href="#sobre" className="Navbar">Mapa</a>
          <a href="#sobre" className="Navbar">Parcerias</a>
          <a href="#sobre" className="Navbar">Sobre</a>
        </nav>
        <div className="flex gap-4">
          <Button variant="outlined" className="bg-white border-gray-400 text-blue-800 rounded-full hover-bg-blue-800">Login</Button>
          <button className="Botões">Cadastre-se</button>
        </div>
      </header>
    </>
  )
}