import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export const CardMed = ({ medicamento }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="/img/logo1.png" />
      <Card.Body>
        <Card.Title>{medicamento.nome}</Card.Title>
        <Card.Text>{medicamento.descricao}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{medicamento.laboratorio}</ListGroup.Item>
        <ListGroup.Item>{medicamento.dosagem}</ListGroup.Item>
        <ListGroup.Item>{medicamento.tipo}s</ListGroup.Item>
        <ListGroup.Item>{medicamento.preco_unitario}s</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#"> + Detalhes</Card.Link>
      </Card.Body>
    </Card>
  );
};
