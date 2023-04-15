import React from "react";
import { Header } from "../components/Header/Header";
import { Container, Row } from "react-bootstrap";
import { CardMed } from "../components/CardMed";

function ListaMed() {
  return (
    <>
      <Header />
      <Container>
        <Row className="m-5 text-center">
          <h2>Medicamentos</h2>
        </Row>
        <Row>
          <CardMed />
        </Row>
      </Container>
    </>
  );
}

export default ListaMed;
