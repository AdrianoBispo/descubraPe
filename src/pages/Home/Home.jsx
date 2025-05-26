import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Banner } from "../../components/Banner/Banner";
import { CardsLugares } from "../../components/Cards/CardsLugares";
import { CarroselTrilha } from "../../components/CarroselTrilha/CarroselTrilha";
import { Chatbot } from './../../components/Chatbot/Chatbot';

export function Home() {
  return (
      <>
        <Header />
        <Banner />
        <CarroselTrilha />
        <CardsLugares />
        <Chatbot />
        <Footer />
      </>
    );
}
