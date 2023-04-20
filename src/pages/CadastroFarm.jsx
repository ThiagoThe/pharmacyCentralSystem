import React from "react";
import { useState } from "react";
import { Header } from "../components/Header/Header";
import { Container, Button, Col, Form, Row, InputGroup } from "react-bootstrap";

function CadastroFarm() {
  const [endereco, setEndereco] = useState();

  const [formulario, setFormulario] = useState({
    razao_social: "",
    cnpj: "",
    nome_fantasia: "",
    email: "",
    telefone: "",
    celular: "",
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    complemento: "",
    geocode: "",
  });

  const atualizarCampo = (campo, valor) => {
    setFormulario({
      ...formulario,
      [campo]: valor,
    });
  };
  const buscarCep = () => {
    fetch(`https://viacep.com.br/ws/${formulario.cep}/json/`)
      .then((resposta) => resposta.json())
      .then((dados) => setEndereco(dados))
      .catch((error) => console.log(error));
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();

    const dados = JSON.stringify(formulario);

    fetch("http://localhost:8080/farmacias", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: dados,
    })
      .then(() => console.log("Farmácia cadastrada com sucesso!"))
      .catch((error) => console.log(error));
    console.log(endereco);
  };
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row className="mb-5 text-center">
          <h2>Cadastro de nova farmácia</h2>
        </Row>

        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group className="mb-3" controlId="formGridRazao">
              <Form.Label>Razão Social</Form.Label>
              <Form.Control
                type="text"
                placeholder="Razão Social da farmácia"
                value={formulario.razao_social}
                onChange={(evento) =>
                  atualizarCampo("razao_social", evento.target.value)
                }
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCnpj">
              <Form.Label>CNPJ</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o CNPJ da farmácia"
                value={formulario.cnpj}
                onChange={(evento) =>
                  atualizarCampo("cnpj", evento.target.value)
                }
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridFanName">
              <Form.Label>Nome Fantasia</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome fantasia da farmácia"
                value={formulario.nome_fantasia}
                onChange={(evento) =>
                  atualizarCampo("nome_fantasia", evento.target.value)
                }
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite o email"
                value={formulario.email}
                onChange={(evento) =>
                  atualizarCampo("email", evento.target.value)
                }
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridTel">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Número de Telefone"
                value={formulario.telefone}
                onChange={(evento) =>
                  atualizarCampo("telefone", evento.target.value)
                }
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCel">
              <Form.Label>Celular</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Número de Celular"
                value={formulario.celular}
                onChange={(evento) =>
                  atualizarCampo("celular", evento.target.value)
                }
                required
              />
            </Form.Group>
          </Row>

          <Row className="mb-2 ">
            <Col>
              <hr />
            </Col>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCep">
              <Form.Label>CEP</Form.Label>
              <InputGroup>
                <Form.Control
                  value={formulario.cep}
                  onChange={(evento) =>
                    atualizarCampo("cep", evento.target.value)
                  }
                  required
                />

                <Button variant="primary" onClick={buscarCep}>
                  Buscar
                </Button>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCidade">
              <Form.Label>Cidade</Form.Label>
              <Form.Control
                type="text"
                value={endereco?.localidade}
                onChange={(evento) =>
                  atualizarCampo("cidade", evento.target.value)
                }
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEstado">
              <Form.Label>Estado</Form.Label>
              <Form.Control
                type="text"
                value={endereco?.uf}
                onChange={(evento) => atualizarCampo("uf", evento.target.value)}
                required
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Logradouro/Endereço</Form.Label>
            <Form.Control
              value={endereco?.logradouro}
              onChange={(evento) =>
                atualizarCampo("logradouro", evento.target.value)
              }
              required
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridNum">
              <Form.Label>Numero</Form.Label>
              <Form.Control
                type="number"
                placeholder="Número"
                value={formulario.numero}
                onChange={(evento) =>
                  atualizarCampo("numero", evento.target.value)
                }
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridBairro">
              <Form.Label>Bairro</Form.Label>
              <Form.Control
                type="text"
                value={endereco?.bairro}
                onChange={(evento) =>
                  atualizarCampo("bairro", evento.target.value)
                }
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCompl">
              <Form.Label>Complemento</Form.Label>
              <Form.Control
                type="text"
                placeholder="N° Sala/Apto/Prox/Etc."
                value={formulario.complemento}
                onChange={(evento) =>
                  atualizarCampo("complemento", evento.target.value)
                }
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
