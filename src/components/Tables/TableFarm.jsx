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
            <td>{farmacia.endereco.cidade}</td>
            <td>{farmacia.endereco.estado}</td>

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
          Nome fantasia: {farmacia.razao_socialnome_fantasia}
          <br />
          CNPJ: {farmacia.cnpj}
          <br />
          Email: {farmacia.email}
          <br />
          Telefone: {farmacia.telefone}
          <br />
          Celular: {farmacia.celular}
          <br />
          CEP: {farmacia.endereco.cep}
          <br />
          Cidade: {farmacia.endereco.cidade}
          <br />
          Estado: {farmacia.endereco.estado}
          <br />
          Endereço: {farmacia.endereco.logradouro}
          <br />
          Numero: {farmacia.endereco.numero}
          <br />
          Bairro: {farmacia.endereco.estado}
          <br />
          Complemento: {farmacia.endereco.complemento}
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
