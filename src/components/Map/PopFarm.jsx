import { React } from "react";

export const PopFarm = ({ farmacia }) => {
  return (
    <div>
      <h6>{farmacia.razao_social}</h6>
      <br />
      <hr />
      <br />
      Nome fantasia: {farmacia.nome_fantasia}
      <br />
      CNPJ: {farmacia.cnpj}
      <br />
      Email: {farmacia.email}
      <br />
      Telefone: {farmacia.telefone}
      <br />
      CEP: {farmacia.cep}
      <br />
      Cidade: {farmacia.cidade}
      <br />
      Estado: {farmacia.estado}
      <br />
      Endereço: {farmacia.logradouro}
      <br />
      Numero: {farmacia.numero}
      <br />
      Bairro: {farmacia.bairro}
      <br />
      Complemento: {farmacia.complemento}
    </div>
  );
};
