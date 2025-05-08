import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from '@material-tailwind/react'

import { App } from './App.jsx'
import { Cadastro}  from './pages/Cadastro/Cadastro.jsx';
import { Login }  from './pages/Login/Login.jsx'

import './index.css'

const router = createBrowserRouter([

  // Landing Page do projeto
  {
    path: "/",
    element: <App />,
  },

// Tela de Login
{
  path: "/Cadastro",
  element: <Cadastro />,
},

// Tela de Perfil de Usuario
{
  path: "/Login",
  element: <Login />,
},
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
