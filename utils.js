import pokeData from './pokemon.js';

export function findById(array, id) {
    return array.find(item => id === item.id);
}

export function findPokemonName(name) {
    return pokeData.find(poke => name === poke.pokemon);
}