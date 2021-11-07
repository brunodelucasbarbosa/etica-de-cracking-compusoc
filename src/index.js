const botaoEnviar = document.querySelector('.button-enviar');
const containerDireita = document.querySelector('.container-interno-direita');
const containerEsquerda = document.querySelector('.container-interno-esquerda');
const pessoa = {}
let botaoIrPerfil;
let botaoComoProteger;
let botaoTomarCuidado;

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

  botaoIrPerfil.addEventListener('click', async () => {
    const data = await consultarCep(pessoa.cep);
    containerEsquerda.innerHTML = `
          <h2 class="title-site roboto white">SAFESPACE</h2>
          <div class="container-info-cuidados">
            <h2 class="title-interno-direita roboto">Entenda os Riscos!</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/iOM20kM2gOQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          `
    containerDireita.innerHTML = `
          <h2 class="title-interno-direita roboto">Bem-vindxs,<span class="span-safespace"> ${ pessoa.nome }</span>!</h2>
                  <div class="infos-pessoais">
                    <span class="span-interno-direita-perfil roboto">Você mora no Estado: <span class="span-safespace">${ data.uf }</span></span>
                    <span class="span-interno-direita-perfil roboto">Você mora na cidade: <span class="span-safespace">${ data.localidade }</span></span>
                    <span class="span-interno-direita-perfil roboto">Você mora no bairro: <span class="span-safespace">${ data.bairro }</span></span>
                    <span class="span-interno-direita-perfil roboto">Você mora na rua: <span class="span-safespace">${ data.logradouro }</span></span>
                    <span class="span-interno-direita-perfil roboto">E a sua senha é: <span class="span-safespace">${ pessoa.senha }</span></span>
                  </div>   
                  <div class="temos-dados">
                    <span class="span-interno-direita-logado aviso roboto">Temos acesso a todos os seus dados e você nem percebeu!</span>
                  </div>
                  <div class="botao-enviar">
                    <button class="button-enviar ir-para-perfil roboto white">COMO ME PROTEGER?</button>
                  </div>
          `
    botaoComoProteger = document.querySelector('.button-enviar.ir-para-perfil');
    botaoComoProteger.addEventListener('click', () => {
      containerEsquerda.innerHTML = `<aside class="container-interno-esquerda" style="width: 40vw;">
      <h2 class="title-site roboto white">SAFESPACE</h2>
    </aside>`;
      containerDireita.innerHTML = `<h2 class="title-interno-direita roboto">Como se proteger?</h2>
      <div class="container-info-cuidados">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/iOM20kM2gOQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="botao-enviar tomar-cuidado">
        <button class="button-enviar roboto white">IREI TOMAR CUIDADO!</button>
      </div>`;
      botaoTomarCuidado = document.querySelector('.botao-enviar.tomar-cuidado');
        botaoTomarCuidado.addEventListener('click', () => {
          console.log('final');
        })
    })


  })
})
botaoComoProteger.addEventListener('click', () => {
  console.log('teste')
}
)


async function consultarCep(cep) {
  const promise = await fetch(`https://viacep.com.br/ws/${ cep }/json/`);
  const response = await promise.json();
  return response;
}