import { useEffect, createContext, useState, useContext } from "react";

export const medContext = createContext();

export const useMed = () => {
  const context = useContext(medContext);
  return context;
};

export const MedProvider = ({ children }) => {
  const [medicamentos, setMedicamentos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/medicamentos")
      .then((resposta) => {
        return resposta.json();
      })
      .then((dados) => {
        setMedicamentos(dados);
      });
  }, []);

  const contextValues = { medicamentos };

  return <Context.Provider value={contextValues}>{children}</Context.Provider>;
};
