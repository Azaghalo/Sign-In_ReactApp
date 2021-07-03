import { Component } from "react";
import FormularioCadastro from "./Components/FormularioCadastro/FormularioCadastro";
import "./App.css";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import { validarCPF, validarEmail, validarSenha } from "./models/cadastro";
import validacoesCadastro from "./Context/validacoesCadastro";

class App extends Component {
  render() {
    return (
      <Container maxWidth="sm" component="article">

        <Typography variant="h3" component="h1" align="center">
          Formulario de Cadastro
        </Typography>
        
        <validacoesCadastro.Provider
          value={{ cpf: validarCPF, senha: validarSenha, email: validarEmail }}
        >

          <FormularioCadastro onSubmit={onSubmit} />

        </validacoesCadastro.Provider>

      </Container>
    );
  }
}

function onSubmit(dados) {
  console.log(dados);
}

export default App;
