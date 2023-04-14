import React from "react";
import { useState } from "react";
import { Container, Form, Button, Alert, Image } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);

  const verifyPassword = () => {
    const caracteres = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return caracteres.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (verifyPassword()) {
      setValidPassword(false);
      console.log("Login realizado com sucesso");
    } else {
      setValidPassword(true);
      console.log("Login não realizado");
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100 bg-white ">
      <Image src="/img/logo1.png" width="200" className=""></Image>
      <Form className="d-flex flex-column align-items-center justify-content-center p-4 mb-4 mt-4 bg-white rounded shadow">
        <p>Para entrar faça seu Login</p>
        <Form.Control
          className="w-100 mb-4"
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Form.Control>
        <Form.Control
          className="w-100 mb-4"
          type="password"
          placeholder="Sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Form.Control>
        <Button
          className="w-100"
          variant="primary"
          type="submit"
          onClick={handleSubmit}
        >
          Fazer Login
        </Button>
        {validPassword && (
          <Alert variant="danger" className="w-100 mt-4">
            A senha deve ter no minímo 8 caracteres, com pelo menos uma letra e
            um número
          </Alert>
        )}
      </Form>
    </Container>
  );
}

export default Login;
