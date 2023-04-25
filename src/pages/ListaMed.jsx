import { React, useState } from "react";
import { Header } from "../components/Header/Header";
import { Container, Row } from "react-bootstrap";
import Footer from "../components/Footer/Footer";
import { MedGrid } from "../components/Grids/MedGrid";
import NavSearch from "../components/Search/NavSearch";
import { useMed } from "../contexts/medContext";

function ListaMed() {
  const context = useMed();

  const [buscar, setBuscar] = useState([]);
  const [medBuscado, setMedBuscado] = useState([]);

  function buscarMedicamento() {
    const medBuscado = context.medicamentos.filter((medicamento) => {
      return medicamento.nome.toLowerCase().includes(buscar.toLowerCase());
    });
    setMedBuscado(medBuscado);
  }

  return (
    <>
      <Header />
      <NavSearch
        buscar={buscar}
        setBuscar={setBuscar}
        buscarMedicamento={buscarMedicamento}
        tipoBusca="medicamento"
      />
      <Container>
        <Row className="m-5 text-center">
          <h2>Medicamentos</h2>
        </Row>
        <Row>
          {buscar.length === 0 ? (
            <MedGrid resultado={""} />
          ) : (
            <MedGrid resultado={medBuscado} />
          )}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default ListaMed;
