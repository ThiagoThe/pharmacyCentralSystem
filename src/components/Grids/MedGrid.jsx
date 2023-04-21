import { useMed } from "../../contexts/medContext";
import { CardMed } from "../Card/CardMed";
import { Col, Row } from "react-bootstrap";

export const MedGrid = () => {
  const context = useMed();

  return (
    <Row xs={1} md={3} className="g-4">
      {context.medicamentos.map((medicamento) => (
        <Col key={medicamento.id}>
          <CardMed medicamento={medicamento} />
        </Col>
      ))}
    </Row>
  );
};
