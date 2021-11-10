import { bemVindo } from './src/pages/bemVindo.js';
import { entendaOsRiscosEsquerda, entendaOsRiscosDireita } from './src/pages/entendaOsRiscos.js'
import { creditosEsquerda, creditosDireita } from './src/pages/creditos.js'
import { comoSeProtegerEsquerda, comoSeProtegerDireita } from './src/pages/comoSeProteger.js'

const containerDireita = document.querySelector('.container-interno-direita');
const containerEsquerda = document.querySelector('.container-interno-esquerda');
const pessoa = {};

document.querySelector('.button-enviar').addEventListener('click', () => {
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


  document.querySelector('.button-enviar.ir-para-perfil').addEventListener('click', async () => {
    const data = await consultarCep(pessoa.cep);
    window.scrollTo(0, 0);
    containerEsquerda.innerHTML = entendaOsRiscosEsquerda();
    containerDireita.innerHTML = entendaOsRiscosDireita(pessoa, data);


    document.querySelector('.button-enviar.ir-para-perfil').addEventListener('click', () => {
      window.scrollTo(0, 0);
      containerEsquerda.innerHTML = comoSeProtegerEsquerda();
      containerDireita.innerHTML = comoSeProtegerDireita();

      document.querySelector('.botao-enviar.tomar-cuidado').addEventListener('click', () => {
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
  if (response.erro) {
    document.location.reload(true);
    return window.alert("Não foi possível consultar o CEP, tente novamente!")
  }
  return response;
}