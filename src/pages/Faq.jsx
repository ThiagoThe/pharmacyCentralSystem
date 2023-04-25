import { React } from "react";
import { Header } from "../components/Header/Header";
import { Container, Row, Accordion } from "react-bootstrap";
import Footer from "../components/Footer/Footer";

function Faq() {
  return (
    <>
      <Header />
      <Container>
        <Row className="m-5 text-center">
          <h2>Perguntas frenquentes</h2>
        </Row>
        <Row></Row>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>O que é latitude e longitude?</Accordion.Header>
            <Accordion.Body>
              A nossa posição sobre a Terra é referenciada em relação a linha do
              equador e ao meridiano de Greenwich e é expressa em dois valores:
              a latitude e a longitude. Assim para saber a nossa posição sobre a
              Terra basta saber a latitude e a longitude. <br />A{" "}
              <strong>latitude</strong> é a distância ao Equador medida ao longo
              do meridiano de Greenwich. Esta distância mede-se em graus,
              podendo variar entre 0º e 90º para Norte(N) ou para Sul(S). <br />
              A <strong>longitude</strong> é a distância ao meridiano de
              Greenwich medida ao longo do Equador. Esta distância mede-se em
              graus, variam até 180º, tanto em direção leste quanto em direção
              oeste, adquirindo sinal negativo para indicar o hemisfério
              ocidental.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Como identificar uma latitude ou longitude?
            </Accordion.Header>
            <Accordion.Body>
              No computador, abra o Google Maps.
              <br />
              Clique com o botão direito do mouse no lugar ou na área no mapa.
              <br />
              Uma janela pop-up será aberta. A latitude e a longitude vão
              aparecer no formato decimal na parte superior.
              <br />
              Para copiar as coordenadas automaticamente, clique na latitude e
              longitude.
              <br />
              Para que as coordenadas funcionem corretamente, use graus decimais
              no seguinte formato: <br />
              <br />
              Correto: <strong>latitude:</strong> 41.40338{" "}
              <strong>longitude:</strong> 2.17403 <br />
              <br />
              Incorreto: <strong>latitude:</strong> 41,40338{" "}
              <strong>longitude:</strong>
              2,17403
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Qual a diferença entre Medicamento controlado e comum?
            </Accordion.Header>
            <Accordion.Body>
              As chamadas substâncias controladas ou sujeitas a controle
              especial são substâncias com ação no sistema nervoso central e
              capazes de causar dependência física ou psíquica, motivo pelo qual
              necessitam de um controle mais rígido do que o controle existente
              para as substâncias comuns.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Como faço para excluir alguma farmácia cadastrada ou medicamento?
            </Accordion.Header>
            <Accordion.Body>
              Caso você deseje fazer a exclusão de uma farmácia cadastrada, ou
              de algum medicamento cadastrado, você deve entrar em contado com o
              administrador do sistema, através do e-mail:{" "}
              <strong>dados@labfarmacy.com</strong>. Em sua solicitação, você
              deve informar o nome da farmácia ou medicamento que deseja excluir
              e o motivo da exclusão.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Preciso atualizar algum dos campos de cadastramento, como fazer?
            </Accordion.Header>
            <Accordion.Body>
              No caso de necessidade de atualização ou modificação de algum dos
              dados de cadastramento, tanto de farmácias, como de medicamentos,
              pedimos que entre em contato, através do e-mail:{" "}
              <strong>dados@labfarmacy.com</strong> passando os dados completos,
              detalhando o campo que precisará ser alterado.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              Apareceu uma mensagem de erro 404, como proceder?
            </Accordion.Header>
            <Accordion.Body>
              A mensagem de erro 404 significa que a página que você está
              tentando acessar não existe. <br />
              Verifique novamente a URL digitada e tente novamente. <br />
              Caso o erro persista, entre em contado com o email:{" "}
              <strong>suporte@labfarmacy.com</strong>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      <Footer />
    </>
  );
}

export default Faq;
