import axios from "axios";
import { useEffect, createContext, useState, useContext } from "react";

export const farmContext = createContext();

export const useFarm = () => {
  const context = useContext(farmContext);
  return context;
};

export const FarmProvider = ({ children }) => {
  const [farmacias, setFarmacias] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/farmacias")
      .then((response) => {
        return response.json;
      })
      .then((dados) => setFarmacias(dados));
  }, []);

  const contextValues = { farmacias };

  return (
    <farmContext.Provider value={contextValues}>
      {children}
    </farmContext.Provider>
  );
};
