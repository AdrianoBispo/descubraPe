import { BrowserRouter as Router } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from '@material-tailwind/react'

import { App } from './App.jsx'

import './index.css'


const router = createBrowserRouter([

  // Landing Page do projeto
  {
    path: "/",
    element: <App />,
  },

  //  Estrutura para quando formos adicionar outra página
  // { 
  //   path: "/Namepage",
  //   element: <NamePage />,
  // },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);