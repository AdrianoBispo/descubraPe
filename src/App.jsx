import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute"
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { Parcerias } from "./pages/Parcerias/Parcerias";
import { Missoes } from "./pages/Missoes/Missoes";
import { Assinaturas } from "./pages/Assinaturas/Assinaturas";
import { Home } from "./pages/Home/Home";
import { Profile } from "./pages/Profile/Profile";
import { Login } from "./pages/Login/Login";
import { TrilhasCarrossel } from "./pages/TrilhasCarrossel/TrilhasCarrossel";
import { LugarEscolhido } from './pages/LugarEscolhido/LugarEscolhido';
import { MinhasTrilhas } from "./pages/Home/components/MinhasTrilhas/MinhasTrilhas";
import { TravelLists } from './pages/TravelLists/TravelLists';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/parcerias" element={<Parcerias />} />
        <Route path="/assinaturas" element={<Assinaturas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<TrilhasCarrossel />} />
        <Route path="/lugar-escolhido" element={<LugarEscolhido />} />
        <Route path="/travel-lists" element={<TravelLists />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/missoes"
          element={
            <PrivateRoute>
              <Missoes />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/trilhas"
          element={
            <PrivateRoute>
              <MinhasTrilhas />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
