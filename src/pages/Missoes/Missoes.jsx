import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { PerfilUsuario } from "../Profile/components/PerfilUsuario/PerfilUsuario";
import { Ranking } from "../Profile/components/Ranking/Ranking";

import "./Missoes.css";

export function Missoes() {
  return (
    <>
      <Header />
      <PerfilUsuario />
      <Ranking />
      <Footer />
    </>
  );
}