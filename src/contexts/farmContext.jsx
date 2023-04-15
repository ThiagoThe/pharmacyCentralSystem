import { useEffect, createContext, useState, useContext } from "react";

export const farmContext = createContext();

export const useFarm = () => {
  const context = useContext(farmContext);
  return context;
};

export const FarmProvider = ({ children }) => {
  const [farmacia, setFarmacia] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/farmacias")
      .then((resposta) => {
        return resposta.json();
      })
      .then((dados) => {
        setFarmacia(dados);
      });
  }, []);

  const contextValues = { farmacia };

  return <Context.Provider value={contextValues}>{children}</Context.Provider>;
};
