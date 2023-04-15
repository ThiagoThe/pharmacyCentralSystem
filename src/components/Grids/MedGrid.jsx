import { useMed } from "../../contexts/medContext";
import { CardMed } from "../Card/CardMed";
import CardGroup from "react-bootstrap/CardGroup";

export const MedGrid = () => {
  const context = useMed();

  return (
    <CardGroup xs={1} md={3} className="g-4">
      {context.medicamentos.map((medicamento) => {
        return <CardMed medicamento={medicamento} />;
      })}
    </CardGroup>
  );
};
