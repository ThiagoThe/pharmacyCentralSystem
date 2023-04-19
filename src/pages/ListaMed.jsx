import React from "react";
import { Header } from "../components/Header/Header";
import { Container, Row } from "react-bootstrap";
import { MedGrid } from "../components/Grids/MedGrid";
import { useFarm } from "../contexts/farmContext";

function ListaMed() {
  const farm = useFarm();
  return (
    <>
      <Header />
      {console.log(farm.farmacias)}
      <Container>
        <Row className="m-5 text-center">
          <h2>Medicamentos</h2>
        </Row>
        <Row>
          <MedGrid />
        </Row>
      </Container>
    </>
  );
}

export default ListaMed;
