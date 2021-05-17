import pokeData from '../data/pokemon.js';

export function findById(someArray, someId) {
    const numberId = Number(someId);
    for (let item of someArray) {
        if (item.id === numberId) return item;
    }
    return null;
}

export function findPokemonName(name) {
    return pokeData.find(poke => name === poke.pokemon);
}