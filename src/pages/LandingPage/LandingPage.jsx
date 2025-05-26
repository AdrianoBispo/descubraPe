import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Banner } from "../../components/Banner/Banner";
import { CarroselTrilha } from "../../components/CarroselTrilha/CarroselTrilha";
import { CardsLugares } from './../../components/Cards/CardsLugares';
import { Convite } from "../../components/Convite/Convite";
import { FormParcerias } from "../../components/FormParcerias/FormParcerias";
import { Planos } from "../Assinaturas/components/Planos";
import { Chatbot } from "../../components/Chatbot/Chatbot";


export function LandingPage() {
  return (
    <>
      <Header />
      <Banner />
      <CarroselTrilha />
      <CardsLugares />
      <Convite />
      <Planos />
      <FormParcerias />
      <Chatbot />
      <Footer />
    </>
  );
}
