import { React } from "react";
import { Link } from "react-router-dom";

export const PopFarm = ({ farmacia }) => {
  return (
    <div>
      <h6 className="text-center">{farmacia.razao_social}</h6>
      <hr />
      <strong>CNPJ:</strong> {farmacia.cnpj}
      <br />
      <strong>Nome fantasia:</strong> {farmacia.nome_fantasia}
      <br />
      <strong>Telefone:</strong> {farmacia.telefone}
      <hr />
      <strong>Email:</strong>{" "}
      <Link to={`mailto:${farmacia.email}`}>{farmacia.email}</Link>
      <hr />
      <strong>Celular: </strong>
      <Link
        to={`https://wa.me/55${farmacia.celular}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {farmacia.celular}
      </Link>
      <hr />
      <strong>Endereço:</strong>
      <br />
      <strong>CEP:</strong> {farmacia.endereco.cep}
      <br />
      <strong>Logradouro:</strong> {farmacia.endereco.logradouro}{" "}
      <strong>N°:</strong> {farmacia.endereco.numero}
      <br />
      <strong>Bairro:</strong> {farmacia.endereco.bairro}
      <br />
      <strong>Cidade/Uf:</strong> {farmacia.endereco.cidade}
      {"/"}
      {farmacia.endereco.estado}
      <br />
      <strong>Complemento:</strong> {farmacia.endereco.complemento}
    </div>
  );
};
