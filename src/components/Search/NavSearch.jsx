import React from "react";
import { Button, Container, Nav, Navbar, Form } from "react-bootstrap";

function NavSearch() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Form className="d-flex mx-auto ">
          <Form.Control
            type="search"
            placeholder="O que buscar?"
            className="form-control col-lg-8 col-12"
            aria-label="Search"
          />
          <Button variant="outline-success">Buscar</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavSearch;
