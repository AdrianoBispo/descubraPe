import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Banner } from "./components/Banner/Banner";
import { CarroselTrilha } from "./components/CarroselTrilha/CarroselTrilha";
import  Trilhas  from "./components/Trilhas/Trilhas";
import Cadastro from "./components/Cadastro/Cadastro";
import Login from "./components/Login/Login";

import "./App.css";

export function App() {
  return (
    <>
      <Header />
      <Banner />
      <CarroselTrilha />
      <Trilhas />
      <Cadastro />
      <Login />
      <Footer />
    </>
  );
}
