import { useEffect, createContext, useState, useContext } from "react";
import axios from "axios";

export const farmContext = createContext();

export const useFarm = () => {
  const context = useContext(farmContext);
  return context;
};

export const FarmProvider = ({ children }) => {
  const [farmacias, setFarmacias] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/farmacias")
      .then((response) => {
        return response.data;
      })
      .then((dados) => setFarmacias(dados))
      .catch((err) => console.log(err));
  }, []);

  const contextValues = { farmacias };

  return (
    <farmContext.Provider value={contextValues}>
      {children}
    </farmContext.Provider>
  );
};
