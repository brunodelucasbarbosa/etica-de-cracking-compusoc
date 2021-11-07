const botaoEnviar = document.querySelector('.button-enviar');
const containerDireita = document.querySelector('.container-interno-direita');
const containerEsquerda = document.querySelector('.container-interno-esquerda');
console.log(containerEsquerda)
const pessoa = {}
let botaoIrPerfil;

botaoEnviar.addEventListener('click', (e) => {
  e.preventDefault();
  const nome = document.querySelector('#nome');
  const cep = document.querySelector('.input-dados.cep');
  const senha = document.querySelector('.input-dados.senha');
  const email = document.querySelector('.input-dados.email');
  pessoa.nome = nome.value;
  pessoa.cep = cep.value;
  pessoa.senha = senha.value;
  pessoa.email = email.value;

  containerDireita.innerHTML = `
  <aside class="container-interno-direita">
              <h2 class="title-interno-direita roboto">Bem-vindxs ao <span class="span-safespace">SAFESPACE</span></h2>        
              <span class="span-interno-direita-logado roboto">Prezamos por uma navegação segura e dados bem guardados!</span>

              <div class="botao-enviar">
                <button class="button-enviar ir-para-perfil roboto white">IR PARA MEU PERFIL</button>
              </div>
</aside>
  `
  botaoIrPerfil = document.querySelector('.button-enviar.ir-para-perfil');
  botaoIrPerfil.addEventListener('click', () => {
    const promise = fetch(`https://viacep.com.br/ws/${pessoa.cep}/json/`).then(
      (response) => {
        const promiseBody = response.json();
        promiseBody.then(data => {
          containerDireita.innerHTML = `
          <h2 class="title-interno-direita roboto">Bem-vindxs,<span class="span-safespace"> ${pessoa.nome}</span>!</h2>
                  <div class="infos-pessoais">
                    <span class="span-interno-direita-perfil roboto">Você mora no Estado: <span class="span-safespace">${data.uf}</span></span>
                    <span class="span-interno-direita-perfil roboto">Você mora na cidade: <span class="span-safespace">${data.localidade}</span></span>
                    <span class="span-interno-direita-perfil roboto">Você mora no bairro: <span class="span-safespace">${data.bairro}</span></span>
                    <span class="span-interno-direita-perfil roboto">Você mora na rua: <span class="span-safespace">${data.logradouro}</span></span>
                    <span class="span-interno-direita-perfil roboto">E a sua senha é: <span class="span-safespace">${pessoa.senha}</span></span>
                  </div>   
                  <div class="temos-dados">
                    <span class="span-interno-direita-logado aviso roboto">Temos acesso a todos os seus dados e você nem percebeu!</span>
                  </div>
                  <div class="botao-enviar">
                    <button class="button-enviar ir-para-perfil roboto white">IR PARA MEU PERFIL</button>
                  </div>
          `
        })
      }
    )
   
  })
})

