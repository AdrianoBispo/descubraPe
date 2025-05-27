import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer"
import { Categorias } from "./components/Categorias/Categorias";
import { Chatbot } from '../../components/Chatbot/Chatbot';

export function TrilhasCarrossel() {
  return (
    <>
    <Header />
    <Categorias />
    <Chatbot />
    <Footer />
    </>
  );
}
