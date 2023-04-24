import { useMed } from "../../contexts/medContext";
import { CardMed } from "../Card/CardMed";
import { Col, Row, Container } from "react-bootstrap";

export const MedGrid = ({ resultado }) => {
  const context = useMed();

  return (
    <>
      <Row xs={1} md={3} className="g-4">
        {resultado === "" ? (
          context.medicamentos.length ? (
            context.medicamentos.map((medicamento) => (
              <Col key={medicamento.id}>
                <CardMed medicamento={medicamento} />
              </Col>
            ))
          ) : (
            <h3>Não há medicamentos cadastrados</h3>
          )
        ) : (
          resultado.map((medicamento) => (
            <Col key={medicamento.id}>
              <CardMed medicamento={medicamento} />
            </Col>
          ))
        )}
      </Row>
    </>
  );
};
