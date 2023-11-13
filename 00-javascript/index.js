import {requisicao} from './temas/fetch.js'
import {fetchProdutos} from './temas/await.js'
import {filterFunction} from './temas/filter.js'
import {mapFunction} from './temas/map.js'

fetchProdutos('https://ranekapi.origamid.dev/json/api/produto')
requisicao
filterFunction()
mapFunction()
