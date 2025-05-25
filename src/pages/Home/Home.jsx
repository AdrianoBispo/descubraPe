import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Banner } from "../../components/Banner/Banner";
import { BookingCards } from "../../components/Cards/BookingCards";
import { CarroselTrilha } from "../../components/CarroselTrilha/CarroselTrilha";

export function Home() {
  return (
      <>
        <Header />
        <Banner />
        <CarroselTrilha />
        <BookingCards />
        <Footer />
      </>
    );
}
