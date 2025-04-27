import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Carrosel } from './components/Carrosel/Carrosel';
import { CarroselTrilha } from './components/CarroselTrilha/CarroselTrilha';

import "./App.css";

export function App() {
  return (
    <>
      <Header />
      <Carrosel />
      <CarroselTrilha />
      <Footer />
    </>
  );
}
