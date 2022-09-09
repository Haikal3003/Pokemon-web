const pokemon_container = document.querySelector('.pokemon-container');

function pokemonNumber() {
  let pokemons_number = 121;
  for (let i = 0; i < pokemons_number; i++) {
    getPokemon(i);
  }
}

function getPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => createPokemonsCard(data));
}

function createPokemonsCard(pokemon) {
  const pokemonsEl = document.createElement('div');
  pokemonsEl.classList.add('pokemon-card');

  const pokemon_card =
    `<div class="pokemon-image">
  <img src="${pokemon.sprites.front_default}">
  </div>
  <h3 class="pokemon-name">${pokemon.name}</h3>` +
    `   <div class="details-stats">
            <div class="hp stat">
              <p>${pokemon.stats[0].stat.name}</p>
              <span>${pokemon.stats[0].base_stat}</span>
            </div>

            <div class="attack stat">
              <p>${pokemon.stats[1].stat.name}</p>
              <span>${pokemon.stats[1].base_stat}</span>
            </div>

            <div class="defense stat">
              <p>${pokemon.stats[2].stat.name}</p>
              <span>${pokemon.stats[2].base_stat}</span>
            </div>

            <div class="special-attack stat">
              <p>${pokemon.stats[3].stat.name}</p>
              <span>${pokemon.stats[3].base_stat}</span>
            </div>

            <div class="special-defense stat">
              <p>${pokemon.stats[4].stat.name}</p>
              <span>${pokemon.stats[4].base_stat}</span>
            </div>

            <div class="speed stat">
              <p>${pokemon.stats[5].stat.name}</p>
              <span>${pokemon.stats[5].base_stat}</span>
            </div>
      </div>`;

  console.log(pokemon);

  pokemonsEl.innerHTML = pokemon_card;
  pokemon_container.appendChild(pokemonsEl);
}

pokemonNumber();
