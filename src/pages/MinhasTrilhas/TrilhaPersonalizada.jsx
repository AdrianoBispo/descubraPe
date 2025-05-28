import { Header } from "./../../components/Header/Header";
import { MinhasTrilhas } from "./components/MinhasTrilhas";
import { Chatbot } from "./../../components/Chatbot/Chatbot";
import { Footer } from "./../../components/Footer/Footer";

export function TrilhaPersonalizada() {
  return (
    <>
      <Header />
      <MinhasTrilhas />
      <Chatbot />
      <Footer />
    </>
  );
}
