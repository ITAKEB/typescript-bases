import { getPokemon } from './generics/get-pokemons';

getPokemon(4)
  //   .then((pokemon) => console.log(pokemon.abilities[0].ability.url))
  .then((pokemon) => console.log(pokemon.sprites.versions?.['generation-i']))
  .catch((e) => console.log(e))
  .finally(() => console.log('getPokemon finished'));
