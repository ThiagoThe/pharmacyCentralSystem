import { React, useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";

function TableFarm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Table responsive>
        <thead>
          <tr>
            <th>N°</th>
            {Array.from({ length: 3 }).map((_, index) => (
              <th key={index}>Estado</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            {Array.from({ length: 3 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
            <Button variant="info" onClick={handleShow}>
              Info
            </Button>
          </tr>
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Razão Social </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Nome fantasia:
          <br />
          CNPJ:
          <br />
          Email:
          <br />
          Telefone:
          <br />
          Celular:
          <br />
          CEP:
          <br />
          Cidade:
          <br />
          Estado:
          <br />
          Endereço:
          <br />
          Numero:
          <br />
          Bairro:
          <br />
          Complemento:
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TableFarm;
