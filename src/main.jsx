import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";

import { App } from "./App.jsx";
import { Login } from "./pages/Login/Login.jsx";
import { Cadastro } from "./pages/Cadastro/Cadastro.jsx";
import { Home } from "./pages/Home/Home.jsx";
import { Profilee } from "./pages/Profile/Profile.jsx";

import "./index.css";

const router = createBrowserRouter([
  // Landing Page
  {
    path: "/",
    element: <App />,
  },

  // Tela de Cadastro
  {
    path: "/cadastro",
    element: <Cadastro />,
  },

  // Tela de Login
  {
    path: "/login",
    element: <Login />,
  },

  // Home Page
  {
    path: "/home",
    element: <Home />,
  },

  // Profile Page
  {
    path: "/profile",
    element: <Profilee />,
  },

  /* Teste
    {
      path: "/",
      element: <BookingCard />,
    },
  */
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
