import { React, useState } from "react";
import { Header } from "../components/Header/Header";
import { Container, Row } from "react-bootstrap";
import Footer from "../components/Footer/Footer";
import NavSearch from "../components/Search/NavSearch";
import { MedGrid } from "../components/Grids/MedGrid";
import { useMed } from "../contexts/medContext";

function ListaMed() {
  const [buscar, setBuscar] = useState("");
  const context = useMed();
  console.log(context.medicamentos);
  return (
    <>
      <Header />
      <NavSearch buscar={buscar} setBuscar={setBuscar} />
      <Container>
        <Row className="m-5 text-center">
          <h2>Medicamentos</h2>
        </Row>
        <Row>
          <MedGrid
            medicamentos={context.medicamentos.filter((medicamento) =>
              medicamento.nome.toLowerCase().includes(buscar.toLowerCase())
            )}
          />
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default ListaMed;
