import React from "react";
import { Header } from "../components/Header/Header";
import { Container, Row } from "react-bootstrap";

function ListaFarm() {
  return (
    <>
      <Header />
      <Container>
        <Row className="m-5 text-center">
          <h2>Farmácias cadastradas</h2>
        </Row>
      </Container>
    </>
  );
}

export default ListaFarm;
