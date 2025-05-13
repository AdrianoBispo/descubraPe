import React, { useState } from "react";
import "./Header.css";

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className="flex fixed w-full top-0 left-0 justify-between items-center z-10 p-3 bg-white shadow-md">
      <div className="flex items-center ml-5">
        <div className="Logo" />
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
        <div className="menu-buttonsHamb">
          <button className="BotaoLoginHamb">Login</button>
          <button className="BotaoCadastroHamb">Cadastre-se</button>
        </div>
      </nav>
        <div className="menu-buttons">
          <button className="BotaoLogin">Login</button>
          <button className="BotaoCadastro">Cadastre-se</button>
        </div>
    </header>
  );
}