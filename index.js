const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const form = document.getElementById("form");
const inputs = document.querySelectorAll(".inputRequired");
const spans = document.querySelectorAll(".spanRequired");
const senhaFormat = /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/;

function addClassErro(index) {
  inputs[index].classList.add("input-erro");
  spans[index].classList.add("span-erro");
}
function removeClassErro(index) {
  inputs[index].classList.remove("input-erro");
  spans[index].classList.remove("span-erro");
}

function validacaoUser() {
  if (inputs[0].value.length < 3) {
    addClassErro(0);
  } else if (inputs[0].value.length >= 3) {
    removeClassErro(0);
    return;
  }
}
// O método test() executa uma busca por uma correspondência
//  entre uma expressão regular e uma string. Retorna true ou false.
function validacaoEmail() {
  if (!mailformat.test(inputs[1].value)) {
    addClassErro(1);
  } else if (mailformat.test(inputs[1].value)) {
    removeClassErro(1);
    return;
  }
}
function validacaoSenha() {
  if (!senhaFormat.test(inputs[2].value)) {
    spans[2].innerHTML = `<ul><li>Senha fraca:</li>
    <li>A senha deve ter 6-15 caracteres</li>
    <li>pelo menos uma letra maiúscula e uma letra minuscula</li> 
    <li>pelo menos um caracter especial</li> <li>pelo menos um número</li></ul>`;
    addClassErro(2);
  } else if (senhaFormat.test(inputs[2].value)) {
    removeClassErro(2);
    return;
  }
}
console.log(inputs[1].value);
inputs.forEach((value) => {
  value.addEventListener("focus", (ev) => {
    ev.preventDefault();
    validacaoUser();
    validacaoEmail();
    validacaoSenha();
  });
});

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  validacaoUser();
  validacaoEmail();
  validacaoSenha();
});
