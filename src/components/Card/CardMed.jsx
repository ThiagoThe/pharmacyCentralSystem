import { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";

export const CardMed = ({ medicamento }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="/img/remedio.jpg" />
        <Card.Body>
          <Card.Title>{medicamento.nome}</Card.Title>
          <Card.Text>{medicamento.laboratorio}</Card.Text>
          <Button variant="primary" onClick={handleShow}>
            Mais informações
          </Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{medicamento.nome}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Laboratório: {medicamento.laboratorio}
          <br />
          Descrição: {medicamento.descricao}
          <br />
          Dosagem: {medicamento.dosagem}
          <br />
          Tipo: {medicamento.tipo}
          <br />
          Preço R$: {medicamento.preco_unitario}
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
