import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Carrosel } from './components/Carrosel/Carrosel';
import { CarroselTrilha } from './components/CarroselTrilha/CarroselTrilha';

import "./App.css";

export function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CarroselTrilha />} />
          <Route path="/trilhas/:id" element={<TrilhaDetalhes />} />
        </Routes>
      </Router>
      
      <Header />
      <Carrosel />
      <CarroselTrilha />
      <Footer />
    </>
  );
}
