
function validarEmail(email) {
  if (email.includes(".com") && email.includes("@")) {
    return { valido: true, texto: "" };
  } else {
    return { valido: false, texto: "Insira um endereco e-mail valido" };
  }
}

function validarCPF(cpf) {
  if (!/^\d+$/.test(cpf)) {
    return { valido: false, texto: "CPF so pode conter numeros" };
  }

  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve conter 11 digitos" };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarSenha(senha) {

  if (senha.length < 6 || senha.length > 30) {
    return { valido: false, texto: "A senha deve conter no minimo 6 digitos e no maximo 30" };
  } else {
    return { valido: true, texto: "" };
  }

}

export {validarCPF, validarEmail, validarSenha};