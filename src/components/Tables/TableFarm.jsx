import { React, useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";

export function TableFarm({ farmacia }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Table responsive>
        <thead>
          <tr>
            <th>N°</th>
            <th>Razão Social</th>
            <th>Cidade</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{farmacia.id}</td>
            <td>{farmacia.razao_social}</td>
            <td>{farmacia.cidade}</td>
            <td>{farmacia.estado}</td>

            <Button variant="info" onClick={handleShow}>
              Info
            </Button>
          </tr>
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{farmacia.razao_social}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Nome fantasia: {farmacia.nome_fantasia}
          <br />
          CNPJ: {farmacia.cnpj}
          <br />
          Email: {farmacia.email}
          <br />
          Telefone: {farmacia.telefone}
          <br />
          Celular: {farmacia.celular}
          <br />
          CEP: {farmacia.cep}
          <br />
          Cidade: {farmacia.cidade}
          <br />
          Estado: {farmacia.estado}
          <br />
          Endereço: {farmacia.logradouro}
          <br />
          Numero: {farmacia.numero}
          <br />
          Bairro: {farmacia.estado}
          <br />
          Complemento: {farmacia.complemento}
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
