import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./backend/components/PrivateRoute"
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { Parcerias } from "./pages/Parcerias/Parcerias";
import { Missoes } from "./pages/Missoes/Missoes";
import { Assinaturas } from "./pages/Assinaturas/Assinaturas";
import { Home } from "./pages/Home/Home";
import { Profile } from "./pages/Profile/Profile"
import { Login } from "./pages/Login/Login"

export function App() {
  return (
     <Router>
      <Routes>
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/parcerias" element={<Parcerias />} />
        <Route path="/missoes" element={<Missoes />} />
        <Route path="/assinaturas" element={<Assinaturas />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/login" element={<Login />}/>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
