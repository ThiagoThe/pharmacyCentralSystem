import React from "react";
import { Button, Container, Navbar, Form } from "react-bootstrap";

function NavSearch({ buscar, setBuscar }) {
  return (
    <Navbar bg="white" expand="ms">
      <Container>
        <Form className="d-flex mx-auto " onSubmit={(e) => e.preventDefault()}>
          <Form.Control
            type="search"
            placeholder="O que buscar?"
            className="form-control col-lg-8 col-12"
            aria-label="Search"
            value={buscar}
            onChange={(evento) => setBuscar(evento.target.value)}
          />
          <Button variant="outline-success">Buscar</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavSearch;
