export const requisicao = fetch('https://ranekapi.origamid.dev/json/api/produto')
  .then(response => response.json()) // then = quando resolver a promisse, faça isso
  .then(jsonBody => document.querySelector('#app').innerHTML = jsonBody[0].nome)