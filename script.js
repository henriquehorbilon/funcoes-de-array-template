const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]

// Prática Guiada I - Callbacks

arrayOriginal = [3,10,58,444]

function triplicarNumeros(arrayDeNumeros){
   let arrayTriplicado = []

    for(let numero of arrayDeNumeros){
      const calc = numero * 3
      arrayTriplicado.push(calc)

    }
      
      return arrayTriplicado
}
// console.log(triplicarNumeros(arrayOriginal))



function retornaPares(arrayPares){
  let arrayDePares = []

  for(let numero of arrayPares){
    if (numero % 2 === 0){
      arrayDePares.push(numero)
  }}

  return arrayDePares
}
// console.log(retornaPares(arrayOriginal))

arrayOriginal2 = [5,77,58,342,33,666,87]

function manipulaNumeros(arrayDeNumeros, callback){
    const novoArray = callback(arrayDeNumeros)
    
    return novoArray
}

// console.log('Triplicando', manipulaNumeros(arrayOriginal2, triplicarNumeros))

// console.log('Pares', manipulaNumeros(arrayOriginal2, retornaPares))

const numeros = [5,8,22,567,83,23,12]

const numerosTriplicados = numeros.map((elemento,indice,arrayOriginaal) => {
    return elemento * 3
})

// console.log(numerosTriplicados)

const numerosPares = numeros.filter((numero,indice, arrayOriginal) => {
    return numero % 2 === 0
})
// console.log(numerosPares)


// EXERCICIO DE FIXAÇÃO

function completaVida(poke){
      poke.vida = 100
      return poke
}

const pokemonsVidaCheia = pokemons.map(completaVida)
console.log(pokemonsVidaCheia)

const pokemonFire = pokemons.filter((pokemon,indice) => {
      return pokemon.tipo === 'fogo'
 })
console.log(pokemonFire)