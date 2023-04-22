import React from "react";
import { useFarm } from "../contexts/farmContext";
import { Header } from "../components/Header/Header";
import { Container, Row } from "react-bootstrap";
import { Map } from "../components/Map/Map";
import Footer from "../components/Footer/Footer";

function ListaFarm() {
  const context = useFarm();

  return (
    <>
      <Header />

      <Container>
        <Row className="m-5 text-center">
          <h2>Farmácias cadastradas</h2>
        </Row>
        <Row>
          <Map />
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default ListaFarm;
