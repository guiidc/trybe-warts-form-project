const loginInput = document.querySelector('#login'); // seleciona input do login
const loginButton = document.querySelector('#login-button'); // seleciona botão para logar
const passwordInput = document.querySelector('#password'); // seleciona input da senha
const agreeCheckbox = document.querySelector('#agreement'); // seleciona o checkbox de concordo com os termos
const agreeBtn = document.querySelector('#submit-btn'); // seleciona o botão de enviar no final do formulário
const textArea = document.querySelector('#textarea'); // seleciona a text area
const counter = document.querySelector('#counter'); // seleciona o counter de caracteres
const form = document.querySelector('#evaluation-form'); // seleciona o escopo main do body
function verifyLogin() {
  if (loginInput.value !== 'tryber@teste.com') return false;
  if (passwordInput.value !== '123456') return false;
  return true;
}
loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (verifyLogin()) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
agreeCheckbox.addEventListener('change', () => {
  agreeBtn.toggleAttribute('disabled');
  agreeBtn.classList.toggle('btn-disabled');
  agreeBtn.classList.toggle('btn-enabled');
});
textArea.addEventListener('input', () => {
  const cont = 500 - textArea.value.length;
  counter.innerHTML = cont;
});

function getCheckBoxValue(element) {
  const checked = [];
  for (let i = 0; i < element.length - 1; i += 1) {
    checked.push(element[i].value);
  }
  return checked.join(', ');
}

function getInputsValues() {
  const inputs = document.querySelectorAll('.user-data');
  const family = document.querySelector('input[name = "family"]:checked'); // seleciona a familia marcada
  const contents = document.querySelectorAll('input[type = "checkbox"]:checked'); // seleciona a checkbox de conteudos
  const rate = document.querySelector('input[name = "rate"]:checked'); // seleciona a nota de avaliação
  const userData = [
    `Nome: ${inputs[0].value} ${inputs[1].value}`,
    `Email: ${inputs[2].value}`,
    `Casa: ${inputs[3].value}`,
    `Família: ${family.value}`,
    `Matérias: ${getCheckBoxValue(contents)}`,
    `Avaliação: ${rate.value}`,
    `Observações: ${inputs[4].value}`,
  ];
  return userData;
}

function generateData(e) {
  e.preventDefault();
  const userData = getInputsValues();
  form.innerHTML = '';
  for (let i = 0; i < userData.length; i += 1) {
    const p = document.createElement('p');
    p.innerHTML = userData[i];
    form.appendChild(p);
  }
}
agreeBtn.addEventListener('click', generateData);
