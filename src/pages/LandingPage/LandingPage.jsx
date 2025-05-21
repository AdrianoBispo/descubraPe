import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Banner } from "../../components/Banner/Banner";
import { CarroselTrilha } from "../../components/CarroselTrilha/CarroselTrilha";
import { BookingCards } from "../../components/Cards/BookingCards";
import { Convite } from "../../components/Convite/Convite";
import { Assinaturas } from "../Assinaturas/Assinaturas";
import { FormParcerias } from "../../components/FormParcerias/FormParcerias";

export function LandingPage() {
  return (
    <>
      <Header />
      <Banner />
      <CarroselTrilha />
      <BookingCards />
      <Convite />
      <Assinaturas />
      <FormParcerias />
      <Footer />
    </>
  );
}
