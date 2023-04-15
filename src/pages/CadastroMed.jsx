import React from "react";
import { Header } from "../components/Header/Header";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

function CadastroMed() {
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row className="mb-5 text-center">
          <h2>Cadastro de medicamentos</h2>
        </Row>

        <Form>
          <Row className="mb-3">
            <Form.Group className="mb-3" controlId="formGridNomeMed">
              <Form.Label>Nome do medicamento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome do medicamento"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridLab">
              <Form.Label>Nome do Laboratório</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome do laboratório"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridFanDosagem">
              <Form.Label>Dosagem do medicamento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Dosagem do medicamento"
                required
              />
            </Form.Group>
          </Row>

          <Row className="mb-4">
            <Form.Group className="mb-3" controlId="formGridDescricao">
              <Form.Label>Descrição do medicamento</Form.Label>
              <Form.Control
                as="textarea"
                aria-label=""
                placeholder="Descrição do medicamento"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPreco">
              <Form.Label>Preço unitário</Form.Label>
              <Form.Control type="text" placeholder="Ex: 10.00" required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridTipo">
              <Form.Label>Tipo de Medicamento</Form.Label>
              <Form.Select defaultValue="Escolha..." required>
                <option>Escolha...</option>
                <option>Medicamento controlado</option>
                <option>Medicamento comum</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Adicionar cadastro
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default CadastroMed;
