import React, { useState, useContext } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import validacoesCadastro from "../../Context/validacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({ onSubmit }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCPF] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(validacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          onSubmit({ nome, sobrenome, cpf, promocoes, novidades });
        }
      }}
    >
      <TextField
        id="Nome"
        label="Nome"
        variant="outlined"
        size="small"
        margin="normal"
        fullWidth
        required
        placeholder="Seu Nome Aqui"
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
      />
      <TextField
        id="Sobrenome"
        label="Sobrenome"
        variant="outlined"
        size="small"
        margin="normal"
        fullWidth
        required
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
      />
      <TextField
        id="CPF"
        label="CPF"
        variant="outlined"
        size="small"
        type="text"
        margin="normal"
        fullWidth
        required
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        value={cpf}
        name="cpf"
        onBlur={validarCampos}
        onChange={(event) => {
          setCPF(event.target.value);
        }}
      />

      <FormControlLabel
        label="Promocoes"
        control={
          <Switch
            name="promocoes"
            checked={promocoes}
            color="primary"
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            name="novidades"
            checked={novidades}
            color="primary"
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
          />
        }
      />

      <Button variant="contained" color="primary" type="submit">
        Proximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
