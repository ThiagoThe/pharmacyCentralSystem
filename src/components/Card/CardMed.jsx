import { Card, Button } from "react-bootstrap";

export const CardMed = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="/img/remedio.jpg" />
      <Card.Body>
        <Card.Title>Nome do remédio</Card.Title>
        <Card.Text>Laboratório</Card.Text>
        <Button variant="primary">Mais informações</Button>
      </Card.Body>
    </Card>
  );
};
