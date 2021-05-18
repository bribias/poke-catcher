import { findById } from './utils.js';

const POKEDEX = 'POKEDEX';

export function getPokedex() {
    const stringyPokedex = localStorage.getItem(POKEDEX);
    if (!stringyPokedex) return [];

    const pokedex = JSON.parse(stringyPokedex);
    return pokedex;
}

export function setPokedex(newPokedex) {
    const stringyPokedex = JSON.stringify(newPokedex);
    localStorage.setItem(POKEDEX, stringyPokedex);
}

export function capturePokemon(selectedPokemonId) {
    const pokedex = getPokedex();
    const matchingPokemon = findById(pokedex, selectedPokemonId);

    matchingPokemon.captured++;

    setPokedex(pokedex);
}

export function encounterPokemon(selectedPokemonId) {
    const pokedex = getPokedex();
    const matchingPokemon = findById(pokedex, selectedPokemonId);

    if (matchingPokemon) {
        matchingPokemon.encounterd++;
    } else {
        const newItem = {
            captured: 0,
            encounterd: 1,
            id: selectedPokemonId
        };
        pokedex.push(newItem);
    }
    setPokedex(pokedex);
}

export function getTotalCaptured() {
    let total = 0;
    const pokedex = getPokedex();

    for (let poke of pokedex) {
        total += poke.captured;
    }
    return total;
}