import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";

export function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/lista-farmacias">
          <Image src="/img/logoNav.png" width={250}></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/lista-farmacias">
              Lista de Farmácias
            </Nav.Link>
            <Nav.Link as={Link} to="/lista-medicamentos">
              Lista de Medicamentos
            </Nav.Link>
            <Nav.Link as={Link} to="/cadastro-farmacias">
              Cadastrar Farmácia
            </Nav.Link>
            <Nav.Link as={Link} to="/cadastro-medicamentos">
              Cadastrar Medicamentos
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Sair
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
