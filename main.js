const PokemonList = document.getElementById("PokemonList")

async function fetchPokemonData(PokemonID) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonID}/`)
    const pokemon = await response.json()
    //const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon/33/`)
    //const pokemon2 = await response2.json()`
    console.log(pokemon)
    //console.log(pokemon2)
    return pokemon
}
function displayPokemon(pokemon){
    const pokemonCard = document.createElement("div")
    pokemonCard.classList.add("pokemonCard")
    let abilities=""
    for(let i= 0;i<pokemon.abilities.length;i++){
        abilities=abilities+pokemon.abilities[i].ability.name + " "
    }
    pokemonCard.innerHTML= `
    <h3>${pokemon.name}</h3>
    <h2>Stadistic</h2>
    <h3>${pokemon.stats[0].stat.name}: ${pokemon.stats[0].base_stat}</h3>
    <h3>${pokemon.stats[1].stat.name}: ${pokemon.stats[1].base_stat}</h3>
    <h3>${pokemon.stats[2].stat.name}: ${pokemon.stats[2].base_stat}</h3>
    <h3>${pokemon.stats[3].stat.name}: ${pokemon.stats[3].base_stat}</h3>
    <h3>${pokemon.stats[4].stat.name}: ${pokemon.stats[4].base_stat}</h3>

    <img src=${pokemon.sprites.front_default} alt=${pokemon.name}>
    <h3>${abilities}</h3> 
    `
    PokemonList.appendChild(pokemonCard)

        
}
async function loadPokedex(params) {
    dato =  await fetchPokemonData(28)
    console.log(dato)
    displayPokemon(dato)
}
 async function loadPokedex() {
    for (let i=1; i<=140; i++){
         const pokemon = await fetchPokemonData(i);
          displayPokemon(pokemon);
     }
    
  }
loadPokedex();
