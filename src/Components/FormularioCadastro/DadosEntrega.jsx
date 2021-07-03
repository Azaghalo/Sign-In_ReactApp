import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

function DadosEntrega({onSubmit}) {

  const [cep, setCEP] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ cep, endereco, numero, estado, cidade });
      }}
    >
      <TextField
        id="CEP"
        label="CEP"
        type="number"
        variant="outlined"
        size="small"
        margin="normal"
        value={cep}
        onChange={(event) => {
          setCEP(event.target.value);
        }}
      />
      <TextField
        id="Endereco"
        label="Endereco"
        type="text"
        variant="outlined"
        size="small"
        margin="normal"
        fullWidth
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
      />
      <TextField
        id="Numero"
        label="Numero"
        type="number"
        variant="outlined"
        size="small"
        margin="normal"
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
        }}
      />
      <TextField
        id="Estado"
        label="Estado"
        type="text"
        variant="outlined"
        size="small"
        margin="normal"
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value);
        }}
      />
      <TextField
        id="Cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        size="small"
        margin="normal"
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value);
        }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
