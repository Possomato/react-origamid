//Quando usar o Map : para obter um novo array com a mesma quantidade de itens, porém modificados

export function mapFunction(){
  const tvShows = [
    {name: 'Breaking Bad', releaseYear: 2008 },
    {name: 'Mr. Robot', releaseYear: 2015 },
    {name: 'Hannibal', releaseYear: 2013 },
    {name: 'The Handmaid\'s Tale', releaseYear: 2017 },
    {name: 'House M.D.', releaseYear: 2004 },
    {name: 'Watchmen', releaseYear: 2019 }
  ]
  const nomesShows = tvShows.map(({name}) => name)
  console.log(nomesShows)
}