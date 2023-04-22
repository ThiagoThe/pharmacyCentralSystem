import { useMed } from "../../contexts/medContext";
import { CardMed } from "../Card/CardMed";
import { Col, Row } from "react-bootstrap";

export const MedGrid = ({ medicamento }) => {
  const context = useMed();

  return (
    <Row xs={1} md={3} className="g-4">
      {context.medicamentos.length ? (
        context.medicamentos.map((medicamento) => (
          <Col key={medicamento.nome}>
            <CardMed medicamento={medicamento} />
          </Col>
        ))
      ) : (
        <h3>Não há medicamentos cadastrados</h3>
      )}
    </Row>
  );
};
