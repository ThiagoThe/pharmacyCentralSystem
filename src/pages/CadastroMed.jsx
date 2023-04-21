import { React, useState } from "react";
import { Header } from "../components/Header/Header";
import { Button, Col, Form, Row, Container, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";

function CadastroMed() {
  const { register, handleSubmit, reset } = useForm(); //

  const [cadastroSucesso, setCadastroSucesso] = useState(false); // estado para exibir mensagem de sucesso

  // função para salvar os dados do formulário
  const salvarMed = (medicamentos) => {
    const dados = JSON.stringify(medicamentos);

    fetch("http://localhost:8080/medicamentos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: dados,
    })
      .then(() => {
        setCadastroSucesso(true);

        const timer = setTimeout(() => {
          // função para recarregar a página após 10 segundos
          window.location.reload();
        }, 10000);

        const interval = setInterval(() => {
          // função para limpar o timer caso o usuário navegue para outra página
          if (timer && document.hidden) {
            clearTimeout(timer);
            clearInterval(interval);
          }
        }, 1000);
      })
      .catch((error) => console.log(error));

    reset();
  };

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row className="mb-5 text-center">
          <h2>Cadastro de medicamentos</h2>
        </Row>

        <Form onSubmit={handleSubmit(salvarMed)}>
          <Row className="mb-3">
            <Form.Group className="mb-3">
              <Form.Label>Nome do medicamento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome do medicamento"
                id="nome"
                {...register("nome", { required: true })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Nome do Laboratório</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome do laboratório"
                id="laboratorio"
                {...register("laboratorio", { required: true })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Dosagem do medicamento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Dosagem do medicamento"
                id="dosagem"
                {...register("dosagem", { required: true })}
              />
            </Form.Group>
          </Row>

          <Row className="mb-4">
            <Form.Group className="mb-3">
              <Form.Label>Descrição do medicamento</Form.Label>
              <Form.Control
                as="textarea"
                aria-label=""
                placeholder="Descrição do medicamento"
                id="descricao"
                {...register("descricao", { required: false })}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Preço unitário</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: 10.00"
                id="preco_unitario"
                {...register("preco_unitario", { required: true })}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Tipo de Medicamento</Form.Label>
              <Form.Select id="tipo" {...register("tipo", { required: true })}>
                <option value="Medicamento controlado">
                  Medicamento controlado
                </option>
                <option value="Medicamento comum">Medicamento comum</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            {cadastroSucesso && (
              <Alert variant="success">
                Medicamento Cadastrado com Sucesso! Clique para
                <Alert.Link href="/lista-medicamentos">
                  {" "}
                  Ir para lista de medicamentos
                </Alert.Link>{" "}
                ou para{" "}
                <Alert.Link href="/cadastro-medicamentos">
                  {" "}
                  Cadastrar um Novo Medicamento
                </Alert.Link>
              </Alert>
            )}
          </Row>

          <Button variant="primary" type="submit">
            Adicionar Medicamento
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default CadastroMed;
