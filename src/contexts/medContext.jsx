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
      .get("http://localhost:8080/medicamentos")
      .then((response) => {
        return response.data;
      })
      .then((dados) => setMedicamentos(dados))
      .catch((err) => console.log(err));
  }, []);

  const contextValues = { medicamentos };

  return (
    <medContext.Provider value={contextValues}>{children}</medContext.Provider>
  );
};
