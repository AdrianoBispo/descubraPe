import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../../assets/index";
import { logout } from "../../services/auth/authEmailSenha/logout";
import { useAuth } from "../../services/useAuth";

import "./Header.css";

export function Header() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login"); // Redireciona para a página de login após sair
      console.log("Usuário deslogado com sucesso!");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className="flex fixed w-full top-0 left-0 justify-between items-center z-10 p-3 bg-white shadow-md">
      <div className="flex items-center ml-5">
        <img src={logo} alt="" className="Logo" />
        <span className="TituloLogo" onClick={() => navigate("/")}>
          Descubra PE
        </span>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`${menuAberto ? "active" : ""}`}>
        <ul className={`${menuAberto ? "NavbarMobile" : "Navbar"}`}>
          <li>
            <Link to={currentUser ? "/minhas-trilhas" : "/login"}>Trilhas</Link>
          </li>
          <li>
            <Link to={currentUser ? "/missoes" : "/login"}>Missões</Link>
          </li>
          <li>
            <Link to={currentUser ? "/assinaturas" : "/landing-page/#assinaturas"}>Assinaturas</Link>
          </li>
          <li>
            <Link to={currentUser ? "/parcerias" : "/landing-page/#parcerias"}>Parcerias</Link>
          </li>
        </ul>
        <div className="menu-buttonsHamb">
          {currentUser ? (
            <>
              <Link to="/perfil" className="BotaoLogin">
                Perfil
              </Link>
              <button onClick={handleLogout} className="BotaoLogin">
                Sair
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="BotaoLogin">
                Login
              </Link>
            </>
          )}
        </div>
      </nav>

      <div className="menu-buttons">
        {currentUser ? (
          <>
            <Link to="/profile" className="BotaoLogin">
              Perfil
            </Link>
            <button onClick={handleLogout} className="BotaoLogin">
              Sair
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="BotaoLogin">
              Login
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
