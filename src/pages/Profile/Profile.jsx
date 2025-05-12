import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Profile } from "./components/Profile/Profile";
import { PerfilUsuario } from "./components/PerfilUsuario/PerfilUsuario";
import { Ranking } from "./components/Ranking/Ranking";

import "./Profile.css";

export function Profilee() {
  return (
    <>
      <Header />
      <Profile />
      <PerfilUsuario />
      <Ranking />
      <Footer />
    </>
  );
}
