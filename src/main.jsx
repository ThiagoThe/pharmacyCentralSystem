import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";

// import pages
import Login from "./pages/Login";
import Error from "./pages/Error";
import CadastroFarm from "./pages/CadastroFarm";
import CadastroMed from "./pages/CadastroMed";
import ListaFarm from "./pages/ListaFarm";
import ListaMed from "./pages/ListaMed";

// browser router
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/cadastro-farmacias", element: <CadastroFarm /> },
      { path: "/cadastro-medicamentos", element: <CadastroMed /> },
      { path: "/lista-farmacias", element: <ListaFarm /> },
      { path: "/lista-medicamentos", element: <ListaMed /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
