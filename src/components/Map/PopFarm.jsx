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
      CEP: {farmacia.endereco.cep}
      <br />
      Cidade: {farmacia.endereco.cidade}
      <br />
      Estado: {farmacia.endereco.estado}
      <br />
      Endereço: {farmacia.endereco.logradouro}
      <br />
      Numero: {farmacia.endereco.numero}
      <br />
      Bairro: {farmacia.endereco.bairro}
      <br />
      Complemento: {farmacia.endereco.complemento}
    </div>
  );
};
