import React, { useState } from "react";
import "./Header.css";
import { Button } from "@material-tailwind/react";

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className="flex fixed w-full top-0 left-0 justify-between items-center z-10 p-3 bg-white shadow-md">
      <div className="flex items-center ml-5">
        <div className="w-8 h-8 bg-blue-800 rounded-full Logo" />
        <span className="TituloLogo">Descubra PE</span>
      </div>

      {/* Menu Hamburguer */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu suspenso no mobile */}
      <nav className={`${menuAberto ? "active" : ""}`}>
        <a href="#trilha" className="Navbar">Trilha</a>
        <a href="#mapa" className="Navbar">Mapa</a>
        <a href="#parcerias" className="Navbar">Parcerias</a>
        <a href="#sobre" className="Navbar">Sobre</a>
      </nav>
        <div className="menu-buttons">
          <Button
            variant="outlined"
            className="bg-white border-gray-400 text-blue-800 rounded-full"
          >
            Login
          </Button>
          <button className="Botões">Cadastre-se</button>
        </div>
    </header>
  );
}