import {Header} from "../../components/Header/Header"
import {Footer} from "../../components/Footer/Footer"
import {Local} from "./components/Local/Local"
import { Chatbot } from './../../components/Chatbot/Chatbot';

export function LugarEscolhido() {
  return (
    <div>
      <Header/>
      <Local />
      <Chatbot />
      <Footer />
    </div>
  )
}