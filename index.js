import { bemVindo } from './src/pages/bemVindo.js';
import { entendaOsRiscosEsquerda, entendaOsRiscosDireita } from './src/pages/entendaOsRiscos.js'
import {creditosEsquerda, creditosDireita} from './src/pages/creditos.js'
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
    containerEsquerda.innerHTML = entendaOsRiscosEsquerda();
    containerDireita.innerHTML = entendaOsRiscosDireita();

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
        containerEsquerda.innerHTML = creditosEsquerda();
        containerDireita.innerHTML = creditosDireita();
      })
    })


  })
})



async function consultarCep(cep) {
  const promise = await fetch(`https://viacep.com.br/ws/${ cep }/json/`);
  const response = await promise.json();
  return response;
}