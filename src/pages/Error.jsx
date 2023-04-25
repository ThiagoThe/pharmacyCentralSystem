import React from "react";
import { Header } from "../components/Header/Header";
import { Container, Row, Image, Col } from "react-bootstrap";
import Footer from "../components/Footer/Footer";

function Error() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Row className="m-5 text-center">
            <h1>
              <strong>Desculpe!</strong>
            </h1>
            <h2>Houve um erro: A página não foi encontrada :(</h2>
          </Row>
          <Row className="m-4 text-center">
            <Col xs={6} md={12}>
              <Image src="../../img/error.png" fluid />
            </Col>
          </Row>
          <Row className="m-5 text-center">
            <span>Em caso de dúvidas contate o administrador do sistema</span>
          </Row>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Error;
