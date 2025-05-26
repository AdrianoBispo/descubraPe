import { Header } from "../../components/Header/Header";
import { Planos } from "./components/Planos";
import { Footer } from "../../components/Footer/Footer";
import { Chatbot } from '../../components/Chatbot/Chatbot';

export function Assinaturas() {
  return (
     <>
      <Header />
      <Planos />
      <Chatbot />
      <Footer />
     </>
  );
}
