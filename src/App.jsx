import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Banner } from "./components/Banner/Banner";
import { CarroselTrilha } from "./components/CarroselTrilha/CarroselTrilha";
import { Trilhas }  from "./components/Trilhas/Trilhas";
import { MinhasTrilhas } from "./components/MinhasTrilhas/MinhasTrilhas";
import { PerfilUsuario } from "./components/PerfilUsuario/PerfilUsuario";
import { Profile } from "./components/Profile/Profile";
import { Ranking } from "./components/Ranking/Ranking";

export function App() {
  return (
    <>
      <Header />
      <Banner />
      <CarroselTrilha />
      <Trilhas />
      <MinhasTrilhas />
      <Profile />
      <PerfilUsuario />
      <Ranking />
      <Footer />
    </>
  );
}
