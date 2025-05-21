import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Banner } from "../../components/Banner/Banner";
import { CarroselTrilha } from "../../components/CarroselTrilha/CarroselTrilha";
import { BookingCards } from "../../components/Cards/BookingCards";
import { Convite } from "../../components/Convite/Convite";
import { FormParcerias } from "../../components/FormParcerias/FormParcerias";
import { Planos } from "../Assinaturas/components/Planos";

export function LandingPage() {
  return (
    <>
      <Header />
      <Banner />
      <CarroselTrilha />
      <BookingCards />
      <Convite />
      <Planos />
      <FormParcerias />
      <Footer />
    </>
  );
}
