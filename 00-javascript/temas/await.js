export async function fetchProdutos(url){
  const response = await fetch(url)
  const json = await response.json()
  document.querySelector('#app2').innerHTML = json[1].nome
}