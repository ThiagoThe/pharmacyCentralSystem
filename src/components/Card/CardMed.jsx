import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export const CardMed = ({ medicamento }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="/img/logo1.png" />
      <Card.Body>
        <Card.Title>{medicamento.nome}</Card.Title>
        <Card.Text>{medicamento.laboratorio}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#"> + Detalhes</Card.Link>
      </Card.Body>
    </Card>
  );
};
