import { useEffect, createContext, useState, useContext } from "react";
import axios from "axios";

export const medContext = createContext();

export const useMed = () => {
  const context = useContext(medContext);
  return context;
};

export const MedProvider = ({ children }) => {
  const [medicamentos, setMedicamentos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/medicamentos")
      .then((response) => {
        return response.json();
      })
      .then((dados) => setMedicamentos(dados));
  }, []);

  const contextValues = { medicamentos };

  return (
    <medContext.Provider value={contextValues}>{children}</medContext.Provider>
  );
};
