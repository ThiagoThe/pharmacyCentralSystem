import { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";

export const CardMed = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        
        <Card.Img variant="top" src="/img/remedio.jpg" />
        <Card.Body>
          <Card.Title>Nome do remédio</Card.Title>
          <Card.Text>Laboratório</Card.Text>
          <Button variant="primary" onClick={handleShow}>
            Mais informações
          </Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nome do medicamento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lab:
          <br />
          Descrição:
          <br />
          Dosagem:
          <br />
          Tipo:
          <br />
          Preço R$:
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
