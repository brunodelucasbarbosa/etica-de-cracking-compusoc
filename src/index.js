const botaoEnviar = document.querySelector('.button-enviar');

botaoEnviar.addEventListener('click', (e) => {
  e.preventDefault();
  const nome = document.querySelector('#nome');
  const cep =  document.querySelector('.input-dados.cep');
  const senha = document.querySelector('.input-dados.senha');
  const email = document.querySelector('.input-dados.email');
  const pessoa = {
    nome: nome.value,
    cep: cep.value,
    senha: senha.value,
    email: email.value
  }

  console.log(pessoa);
  window.location.href = 'http://127.0.0.1:5500/src/pages/login/login.html'
})