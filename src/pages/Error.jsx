import React from "react";
import { Header } from "../components/Header/Header";
import { Container, Row } from "react-bootstrap";
import Footer from "../components/Footer/Footer";

function Error() {
  return (
    <>
      <Header />
      <Container>
        <Row className="m-5 text-center">
          <h1>Erro 404: Pagina não encontrada</h1>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Error;
