import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { logo } from "../../assets/index";

import "./Header.css";

export function Header() {
  const navigate = useNavigate();

  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className="flex fixed w-full top-0 left-0 justify-between items-center z-10 p-3 bg-white shadow-md">
      <div className="flex items-center ml-5">
        <img src={logo} alt="" className="Logo" />
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
        <a href="/#banner" className="Navbar">
          Início
        </a>
        <a href="/#trilhas-carrossel" className="Navbar">
          Trilhas
        </a>
        <a href="/#lugares" className="Navbar">
          Lugares
        </a>
        <div className="menu-buttonsHamb">
          <button className="BotaoLoginHamb" onClick={() => navigate("/login")}>Login</button>
          <button className="BotaoCadastroHamb" onClick={() => navigate("/cadastro")}>Cadastre-se</button>
        </div>
      </nav>
      <div className="menu-buttons">
        <button className="BotaoLogin" onClick={() => navigate("/login")}>Login</button>
        <button className="BotaoCadastro" onClick={() => navigate("/cadastro")}>Cadastre-se</button>
      </div>
    </header>
  );
}
