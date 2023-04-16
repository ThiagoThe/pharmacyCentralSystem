import React from "react";
import { Header } from "../components/Header/Header";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

function CadastroFarm() {
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row className="mb-5 text-center">
          <h2>Cadastro de nova farmácia</h2>
        </Row>

        <Form>
          <Row className="mb-3">
            <Form.Group className="mb-3" controlId="formGridRazao">
              <Form.Label>Razão Social</Form.Label>
              <Form.Control
                type="text"
                placeholder="Razão Social da farmácia"
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCnpj">
              <Form.Label>CNPJ</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o CNPJ da farmácia"
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridFanName">
              <Form.Label>Nome Fantasia</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome fantasia da farmácia"
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite o email"
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridTel">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Número de Telefone"
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCel">
              <Form.Label>Celular</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Número de Celular"
                required
              />
            </Form.Group>
          </Row>

          <Row className="mb-2 ">
            <Col>
              <hr />
            </Col>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCep">
              <Form.Label>CEP</Form.Label>
              <Form.Control placeholder="CEP" required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCidade">
              <Form.Label>Cidade</Form.Label>
              <Form.Control type="text" placeholder="Cidade" required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEstado">
              <Form.Label>Estado</Form.Label>
              <Form.Control type="text" placeholder="Estado" required />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Logradouro/Endereço</Form.Label>
            <Form.Control placeholder="Avenida/Rua/Servidão" required />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridNum">
              <Form.Label>Numero</Form.Label>
              <Form.Control type="number" placeholder="Número" required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridBairro">
              <Form.Label>Bairro</Form.Label>
              <Form.Control type="text" placeholder="Bairro" required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCompl">
              <Form.Label>Complemento</Form.Label>
              <Form.Control type="text" placeholder="N° Sala/Apto/Prox/Etc." />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Cadastrar Farmácia
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default CadastroFarm;
