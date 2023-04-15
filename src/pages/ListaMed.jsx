import React from "react";
import { Header } from "../components/Header/Header";
import { Container, Row } from "react-bootstrap";

function ListaMed() {
  return (
    <>
      <Header />
      <Container>
        <Row className="m-5 text-center">
          <h2>Medicamentos</h2>
        </Row>
      </Container>
    </>
  );
}

export default ListaMed;
