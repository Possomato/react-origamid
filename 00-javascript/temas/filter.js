//Quando usar o Filter: para obter novo array com apenas alguns itens do array original

export const filterFunction = () => {
  const numeros = [2, 4, 54, 230, 43, 700]
  const numerosMaioresQue100 = numeros.filter((item, index, array) => item > 100) //se retornar true entra no novo array
  console.log(numerosMaioresQue100)
}