import React from "react";
import { useState } from "react";
import { Header } from "../components/Header/Header";
import {
  Container,
  Button,
  Col,
  Form,
  Row,
  InputGroup,
  Alert,
} from "react-bootstrap";
import { useForm } from "react-hook-form";

function CadastroFarm() {
  const buscarCep = () => {
    fetch(`https://viacep.com.br/ws/${formulario.cep}/json/`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setValue("endereco", {
          cidade: dados.localidade,
          estado: dados.uf,
          logradouro: dados.logradouro,
          bairro: dados.bairro,
          numero: dados.numero,
          complemento: dados.complemento,
          cep: dados.cep,
          latitude: dados.latitude,
          longitude: dados.longitude,
        });
      })
      .catch((error) => console.log(error));
  };

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const [cadastroSucesso, setCadastroSucesso] = useState(false);

  const salvarFarm = (informacoes) => {
    const dados = JSON.stringify(informacoes);

    fetch("http://localhost:8080/farmacias", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: dados,
    })
      .then(() => setCadastroSucesso(true))
      .catch((error) => console.log(error));
  };

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

        {cadastroSucesso && (
          <Alert key="" variant="success">
            Farmácia Cadastrada com Sucesso! Clique para
            <Alert.Link href="/lista-farmacias">
              {" "}
              Ir para lista de farmácias
            </Alert.Link>{" "}
            ou para{" "}
            <Alert.Link href="/cadastro-farmacias">
              {" "}
              Cadastrar uma nova farmácia
            </Alert.Link>
          </Alert>
        )}

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
                  pattern="[0-9]{8}"
                  onChange={(evento) =>
                    atualizarCampo("cep", evento.target.value)
                  }
                  placeholder="digite o CEP (somente números) e clique em buscar"
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
                id="cidade"
                {...register("endereco.cidade", { required: true })}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Estado</Form.Label>
              <Form.Control
                type="text"
                id="estado"
                {...register("endereco.estado", { required: true })}
              />
            </Form.Group>
          </Row>

          <Form.Group as={Col}>
            <Form.Label>Logradouro/Endereço</Form.Label>
            <Form.Control
              id="logradouro"
              {...register("endereco.logradouro", { required: true })}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Numero</Form.Label>
              <Form.Control
                type="number"
                placeholder="Número"
                id="numero"
                {...register("endereco.numero", { required: true })}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Bairro</Form.Label>
              <Form.Control
                type="text"
                id="bairro"
                {...register("endereco.bairro", { required: true })}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Complemento</Form.Label>
              <Form.Control
                type="text"
                placeholder="N° Sala/Apto/Prox/Etc."
                id="complemento"
                {...register("endereco.complemento", { required: false })}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Latitude</Form.Label>
              <Form.Control
                id="latitude"
                {...register("endereco.latitude", {
                  required: true,
                  pattern: {
                    value: /[+-]?([0-9]*[.])?[0-9]+$/,
                    message: "digite a latitude com ponto",
                  },
                })}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Longitude</Form.Label>
              <Form.Control
                id="longitude"
                {...register("endereco.longitude", {
                  required: true,
                  pattern: {
                    value: /[+-]?([0-9]*[.])?[0-9]+$/,
                    message: "digite a longitude com ponto",
                  },
                })}
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
