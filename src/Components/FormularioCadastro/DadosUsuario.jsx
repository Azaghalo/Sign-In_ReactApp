import React, { useState, useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import validacoesCadastro from "../../Context/validacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({ onSubmit }) {
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const validacoes = useContext(validacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          onSubmit({ email, senha });
        }
      }}
    >
      <TextField
        id="Email"
        label="Email"
        variant="outlined"
        size="small"
        margin="normal"
        fullWidth
        required
        type="email"
        error={!erros.email.valido}
        helperText={erros.email.texto}
        value={email}
        name="email"
        onBlur={validarCampos}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <TextField
        id="senha"
        label="Senha"
        type="password"
        variant="outlined"
        size="small"
        margin="normal"
        required
        fullWidth
        name="senha"
        value={senha}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        onBlur={validarCampos}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
      />
      <Button fullWidth type="submit" variant="contained" color="primary">
        Iniciar Cadastro
      </Button>
    </form>
  );
}

export default DadosUsuario;
