import React from "react";
import { useState } from "react";
import { Header } from "../components/Header/Header";
import { Container, Button, Col, Form, Row, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";

function CadastroFarm() {
  const buscarCep = () => {
    fetch(`https://viacep.com.br/ws/${formulario.cep}/json/`)
      .then((resposta) => resposta.json())
      .then((dados) => setEndereco(dados))
      .catch((error) => console.log(error));
  };

  const { register, handleSubmit } = useForm();

  const salvarFarm = (informacoes) => {
    const dados = JSON.stringify(informacoes);

    fetch("http://localhost:8080/farmacias", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: dados,
    })
      .then(() => console.log("Farmácia cadastrada com sucesso!"))
      .catch((error) => console.log(error));
  };

  const [endereco, setEndereco] = useState();

  const [formulario, setFormulario] = useState({});

  const atualizarCampo = (campo, valor) => {
    setFormulario({
      ...formulario,
      [campo]: valor,
    });
  };

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row className="mb-5 text-center">
          <h2>Cadastro de nova farmácia</h2>
        </Row>

        <Form onSubmit={handleSubmit(salvarFarm)}>
          <Row className="mb-3">
            <Form.Group className="mb-3">
              <Form.Label>Razão Social</Form.Label>
              <Form.Control
                type="text"
                placeholder="Razão Social da farmácia"
                id="razao_social"
                {...register("razao_social", { required: true })}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>CNPJ</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o CNPJ da farmácia"
                id="cnpj"
                {...register("cnpj", { required: true })}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Nome Fantasia</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome fantasia da farmácia"
                id="nome_fantasia"
                {...register("nome_fantasia", { required: true })}
              />
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite o email"
                id="email"
                {...register("email", { required: true })}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Número de Telefone"
                id="telefone"
                {...register("telefone", { required: true })}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Celular</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Número de Celular"
                id="celular"
                {...register("celular", { required: true })}
              />
            </Form.Group>
          </Row>

          <Row className="mb-2 ">
            <Col>
              <hr />
            </Col>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>CEP</Form.Label>
              <InputGroup>
                <Form.Control
                  id="cep"
                  {...register("cep", { required: true })}
                  value={formulario.cep}
                  onChange={(evento) =>
                    atualizarCampo("cep", evento.target.value)
                  }
                />

                <Button variant="primary" onClick={buscarCep}>
                  Buscar
                </Button>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Cidade</Form.Label>
              <Form.Control
                type="text"
                value={endereco?.localidade}
                id="cidade"
                {...register("cidade", { required: true })}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Estado</Form.Label>
              <Form.Control
                type="text"
                value={endereco?.uf}
                id="estado"
                {...register("estado", { required: true })}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Logradouro/Endereço</Form.Label>
            <Form.Control
              value={endereco?.logradouro}
              id="logradouro"
              {...register("logradouro", { required: true })}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Numero</Form.Label>
              <Form.Control
                type="number"
                placeholder="Número"
                id="numero"
                {...register("numero", { required: true })}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Bairro</Form.Label>
              <Form.Control
                type="text"
                value={endereco?.bairro}
                id="bairro"
                {...register("bairro", { required: true })}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Complemento</Form.Label>
              <Form.Control
                type="text"
                placeholder="N° Sala/Apto/Prox/Etc."
                id="complemento"
                {...register("complemento", { required: false })}
              />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Cadastrar Farmácia
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default CadastroFarm;
