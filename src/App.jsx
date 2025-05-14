import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Banner } from "./components/Banner/Banner";
import { CarroselTrilha } from "./components/CarroselTrilha/CarroselTrilha";
import { MinhasTrilhas } from "./components/MinhasTrilhas/MinhasTrilhas";
import { BookingCards } from "./components/Cards/BookingCards";
import { Convite } from "./components/Convite/Convite";

export function App() {
  return (
    <>
      <Header />
      <Banner />
      <CarroselTrilha />
      <BookingCards />
      <MinhasTrilhas />
      <Convite />
      <Footer />
    </>
  );
}
