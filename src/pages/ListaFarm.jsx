import React, { useState } from "react";
import { useFarm } from "../contexts/farmContext";
import { Header } from "../components/Header/Header";
import { Container, Row } from "react-bootstrap";
import { Map } from "../components/Map/Map";
import Footer from "../components/Footer/Footer";
import NavSearch from "../components/Search/NavSearch";

function ListaFarm() {
  const context = useFarm();

  const [buscar, setBuscar] = useState([]);
  const [farmaciaBuscada, setFarmaciaBuscada] = useState([]);

  function buscarFarmacia() {
    const farmaciaBuscada = context.farmacias.filter((farmacia) => {
      return farmacia.razao_social.toLowerCase().includes(buscar.toLowerCase());
    });
    setFarmaciaBuscada(farmaciaBuscada);
  }

  return (
    <>
      <Header />
      <NavSearch
        buscar={buscar}
        setBuscar={setBuscar}
        buscarFarmacia={buscarFarmacia}
        tipoBusca="farmacia"
      />
      <Container>
        <Row className="m-5 text-center">
          <h2>Farmácias cadastradas</h2>
        </Row>
        <Row>
          <Map farmacias={farmaciaBuscada} />
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default ListaFarm;
