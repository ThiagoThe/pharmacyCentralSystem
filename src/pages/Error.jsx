import React from "react";
import { Header } from "../components/Header/Header";
import { Container, Row } from "react-bootstrap";

function Error() {
  return (
    <>
      <Header />
      <Container>
        <Row className="m-5 text-center">
          <h1>Erro 404: Pagina não encontrada</h1>
        </Row>
      </Container>
    </>
  );
}

export default Error;
