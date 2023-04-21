import React from "react";
import { Header } from "../components/Header/Header";
import { Container, Row } from "react-bootstrap";
import { MedGrid } from "../components/Grids/MedGrid";
import Footer from "../components/Footer/Footer";

function ListaMed() {
  return (
    <>
      <Header />

      <Container>
        <Row className="m-5 text-center">
          <h2>Medicamentos</h2>
        </Row>
        <Row>
          <MedGrid />
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default ListaMed;
