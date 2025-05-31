import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Banner } from "../../components/Banner/Banner";
import { Carrossel } from "../../components/Carrossel/Carrossel";
import { CardsLugares } from './../../components/Cards/CardsLugares/CardsLugares';
import { Convite } from "../../components/Convite/Convite";
import { FormParcerias } from "../../components/FormParcerias/FormParcerias";
import { Planos } from "../Assinaturas/components/Planos";
import { Chatbot } from "../../components/Chatbot/Chatbot";


export function LandingPage() {
  return (
    <>
      <Header />
      <Banner />
      <Carrossel />
      <CardsLugares />
      <Convite />
      <Planos />
      <FormParcerias />
      <Chatbot />
      <Footer />
    </>
  );
}
