import React from "react";
import { Header } from "../components/Header/Header";
import { Container, Row } from "react-bootstrap";
import { Map } from "../components/Map/Map";
import { TableFarm } from "../components/Tables/TableFarm";

function ListaFarm() {
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
        <Row className="m-5">
          <TableFarm />
        </Row>
      </Container>
    </>
  );
}

export default ListaFarm;
