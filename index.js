import {bemVindo} from './bemVindo.js';
const botaoEnviar = document.querySelector('.button-enviar');
const containerDireita = document.querySelector('.container-interno-direita');
const containerEsquerda = document.querySelector('.container-interno-esquerda');
const pessoa = {};
let botaoIrPerfil;
let botaoComoProteger;
let botaoTomarCuidado;

botaoEnviar.addEventListener('click', () => {
  const nome = document.querySelector('#nome');
  const cep = document.querySelector('.input-dados.cep');
  if (cep.value.length !== 8) { return window.alert("Digite um CEP Válido!") }
  const senha = document.querySelector('.input-dados.senha');
  const email = document.querySelector('.input-dados.email');
  if (!nome.value || !cep.value || !senha.value || !email.value) {
    return window.alert("Todos os campos são necessários!");
  }
  pessoa.nome = nome.value;
  pessoa.cep = cep.value;
  pessoa.senha = senha.value;
  pessoa.email = email.value;
  containerEsquerda.innerHTML = '';
  containerDireita.innerHTML = bemVindo();
  /*containerDireita.innerHTML = `
              <h2 class="title-interno-direita roboto">Bem-vindxs ao <span class="span-safespace">SAFESPACE</span></h2>        
              <span class="span-interno-direita-logado roboto">Prezamos por uma navegação segura e dados bem guardados!</span>

              <div class="botao-enviar">
                <button class="button-enviar ir-para-perfil roboto white">IR PARA MEU PERFIL</button>
              </div>
  `*/
  window.scrollTo(0, 0);
  botaoIrPerfil = document.querySelector('.button-enviar.ir-para-perfil');

  botaoIrPerfil.addEventListener('click', async () => {
    const data = await consultarCep(pessoa.cep);
    console.log(data)
    if (data.erro) {
      document.location.reload(true);
      return window.alert("Não foi possível consultar o CEP, tente novamente!")
    }
    window.scrollTo(0, 0);
    containerEsquerda.innerHTML = `
          <h2 class="title-site roboto white">SAFESPACE</h2>
          <div class="container-info-cuidados">
            <h2 class="title-interno-direita roboto">Entenda os Riscos!</h2>
            <iframe width="300" height="315" src="https://www.youtube.com/embed/iOM20kM2gOQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
      window.scrollTo(0, 0);
      containerEsquerda.innerHTML = `<aside class="container-interno-esquerda" style="width: 40vw;">
      <h2 class="title-site roboto white">SAFESPACE</h2>
    </aside>`;
      containerDireita.innerHTML = `<h2 class="title-interno-direita roboto">Como se proteger?</h2>
      <div class="container-info-cuidados">
        <iframe width="300" height="315" src="https://www.youtube.com/embed/iOM20kM2gOQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="botao-enviar tomar-cuidado">
        <button class="button-enviar roboto white">IREI TOMAR CUIDADO!</button>
      </div>`;
      botaoTomarCuidado = document.querySelector('.botao-enviar.tomar-cuidado');
      botaoTomarCuidado.addEventListener('click', () => {
        window.scrollTo(0, 0);
        containerEsquerda.innerHTML = `<h2 class="title-site roboto white">SAFESPACE</h2>
          <div class="container-info-cuidados creditos">
            <span class="span-interno-final roboto">
              Projeto desenvolvido para a matéria MATA68 - Computador Ética e Sociedade.
              Ministrado pelas professoras:
              Anna Friedericka Schwarzelmüller & Débora Abdalla
            </span>
          </div>`;
        containerDireita.innerHTML = `<h2 class="title-interno-direita roboto">Estudantes</h2>
        <div class="icons-creditos">
        <span class="nomes-alunos roboto">Bruno de Lucas Barbosa</span>
        <a href="https://github.com/brunobarbosa17">
          <img src="https://img.icons8.com/color/48/000000/github--v3.png" />
        </a>

        <a href="https://www.linkedin.com/in/brunodelucasbarbosa/">
          <img src="https://img.icons8.com/color/50/000000/linkedin.png" />
        </a>
        <a href="https://www.instagram.com/o_brunobarbosa">
          <img src="https://img.icons8.com/color/50/000000/instagram-new--v2.png" />
        </a>
        <a href="https://www.youtube.com/channel/UC7MDYFpb2qb7gjg9oOpbJFA">
          <img src="https://img.icons8.com/color/50/000000/youtube--v3.png" />
        </a>
      </div>
      <div class="icons-creditos">
        <span class="nomes-alunos roboto">Elis Marcela</span>
        <a href="https://github.com/develis">
          <img src="https://img.icons8.com/color/48/000000/github--v3.png" />
        </a>
        <a href="https://www.linkedin.com/in/elismrclsa/">
          <img src="https://img.icons8.com/color/50/000000/linkedin.png" />
        </a>
        <a href="https://www.instagram.com/elismrclsa/">
          <img src="https://img.icons8.com/color/50/000000/instagram-new--v2.png" />
        </a>
      </div>
      <div class="icons-creditos">
        <span class="nomes-alunos roboto">Jamilson Júnior</span>
        <a href="https://github.com/devruso">
          <img src="https://img.icons8.com/color/48/000000/github--v3.png" />
        </a>
        <a href="https://www.linkedin.com/in/jamilson-j%C3%BAnior-34b5341b2/">
          <img src="https://img.icons8.com/color/50/000000/linkedin.png" />
        </a>
        <a href="https://www.instagram.com/jamiruso/">
          <img src="https://img.icons8.com/color/50/000000/instagram-new--v2.png" />
        </a>
      </div>

      <div class="icons-creditos">
        <span class="nomes-alunos roboto">Larissa Maiara</span>
        <a href="https://www.linkedin.com/in/larissa-maiara-v-111a13b3">
          <img src="https://img.icons8.com/color/50/000000/linkedin.png" />
        </a>
        <a href="https://instagram.com/canto_da_lary?utm_medium=copy_link">
          <img src="https://img.icons8.com/color/50/000000/instagram-new--v2.png" />
        </a>
      </div>
      <div class="icons-creditos">
        <span class="nomes-alunos roboto">Lorena Roberta</span>
        <a href="https://github.com/lorenarbt">
          <img src="https://img.icons8.com/color/48/000000/github--v3.png" />
        </a>
        <a href="https://www.linkedin.com/in/lorena-roberta-4416ba1ba/">
          <img src="https://img.icons8.com/color/50/000000/linkedin.png" />
        </a>
        <a href="https://www.instagram.com/lorenarbt/">
          <img src="https://img.icons8.com/color/50/000000/instagram-new--v2.png" />
        </a>
      </div>
    </div>`;
      })
    })


  })
})



async function consultarCep(cep) {
  const promise = await fetch(`https://viacep.com.br/ws/${ cep }/json/`);
  const response = await promise.json();
  return response;
}