import { findById } from './utils.js';

const POKEDEX = 'POKEDEX';

export function getPokedex() {
    const stringyPokedex = localStorage.getItem(POKEDEX);

    if (!stringyPokedex) return [];

    const parsedPokedex = JSON.parse(stringyPokedex);
    
    return parsedPokedex;
}
export function setPokedex(parsedPokedex) {
    const stringyPokedex = JSON.stringify(parsedPokedex);
    localStorage.setItem(POKEDEX, stringyPokedex);
}

export function encounterPokemon(pokemon) {
    const pokedex = getPokedex;
    const matchPokedexItem = findById(pokedex, pokemon.pokemon);

    if (matchPokedexItem) {
        matchPokedexItem.encountered++;
    } else {
        const newPokedexItem = {
            id: pokemon.pokemon,
            caputured: 0,
            encountered: 1
        };
        pokedex.push(newPokedexItem);
    }

    setPokedex(pokedex);
    return pokedex;
}

export function capturePokemon(pokemon) {
    const pokedex = getPokedex();
    const matchPokedexItem = findById(pokedex, pokemon.pokemon);

    matchPokedexItem.caputured++;

    setPokedex(pokedex);
    return pokedex;
}