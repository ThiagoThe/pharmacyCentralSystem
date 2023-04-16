import { useMed } from "../../contexts/medContext";
import { CardMed } from "../Card/CardMed";
import { Col, Row, Card } from "react-bootstrap";

export const MedGrid = () => {
  const context = useMed();

  return (
    <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 12 }).map((_, idx) => (
        <Col>
          <CardMed />
        </Col>
      ))}
    </Row>
  );
};
