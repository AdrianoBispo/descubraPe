import { useState, useEffect } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { navConfig } from "../../mocks/navConfig";
import { logo } from "../../assets/index";
import { logout } from "../../backend/auth/loginNormal/logout";

import "./Header.css";

export function Header() {
  const navigate = useNavigate();
 
  const handleLogout = async () => {
    await logout();
    <Navigate to="/login"></Navigate> // redireciona após logout
  };


  const location = useLocation();
  const currentPath = location.pathname;
  const links = navConfig[currentPath] || [];

  const [isLogged, setisLogged] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    setisLogged(currentPath === "/");
  }, [currentPath]);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className="flex fixed w-full top-0 left-0 justify-between items-center z-10 p-3 bg-white shadow-md">
      <div className="flex items-center ml-5">
        <img src={logo} alt="" className="Logo" />
        <span className="TituloLogo" onClick={() => navigate("/")}>Descubra PE</span>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`${menuAberto ? "active" : ""}`}>
        <ul className={`${menuAberto ? "NavbarMobile" : "Navbar"}`}>
          {links.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className="menu-buttonsHamb">
          <Link to={isLogged ? "/profile" : "/login"} className="BotaoLogin">
            {isLogged ? "Perfil" : "Login"}
          </Link>
          <Link to={isLogged ? "/landing-page" : currentPath} className={isLogged ? "BotaoLogin" : "hidden"}>
            {isLogged ? "Sair" : ""}
          </Link>
        </div>
      </nav>

      <div className="menu-buttons">
        <Link to={isLogged ? "/profile" : "/login"} className="BotaoLogin">
          {isLogged ? "Perfil" : "Login"}
        </Link>
        <Link
          onClick={handleLogout}
          className={isLogged ? "BotaoLogin" : "hidden"}
        >
          {isLogged ? "Sair" : ""}
        </Link>
      </div>
    </header>
  );
}
