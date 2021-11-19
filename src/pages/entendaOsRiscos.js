
export function entendaOsRiscosEsquerda() {
<<<<<<< HEAD
  const esquerda = `
    <h2 class="title-site roboto white">SAFESPACE</h2>
    <div class="container-info-cuidados">
      <h2 class="title-interno-direita roboto">Entenda os Riscos!</h2>
      <iframe width="300" height="300" src="https://www.youtube.com/embed/m2Ls6Hk8t2Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>`;
  return esquerda;
=======
    const esquerda = `
  <h2 class="title-site roboto white">SAFESPACE</h2>
  <div class="container-info-cuidados">
    <h2 class="title-interno-direita roboto">Entenda os Riscos!</h2>
    <iframe width="300" height="315" src="https://www.youtube.com/embed/FFKnAoGCaNE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>`;
    return esquerda;
>>>>>>> 8e01decc4103edcb97bc0a7ee07f9765f45c649e
}

export function entendaOsRiscosDireita(pessoa, data) {
    const direita = `
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
    </div>`;
  return direita;
}