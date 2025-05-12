import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Banner } from "../../components/Banner/Banner";
import { BookingCard } from "../../components/Cards/BookingCard";
import { CarroselTrilha } from "../../components/CarroselTrilha/CarroselTrilha";
import { MinhasTrilhas } from "../../components/MinhasTrilhas/MinhasTrilhas";
import { Trilhas } from "../../components/Trilhas/Trilhas";

import "./Home.css"

export function Home() {
  return (
      <>
        <Header />
        <Banner />
        <CarroselTrilha />
        <BookingCard />
        <MinhasTrilhas />
        <Trilhas />
        <Footer />
      </>
    );
}
