import { findById } from './utils.js';
import pokemon from '../data/pokemon.js';


export function mungeCaptured(pokemonArray) {
    // YOUR CODE HERE
    const results = [];
    // loop through each item in pokemonArray
    for (let poke of pokemonArray) {
        results.push(poke.captured);
    }
    // push the captured key on the pokemonArray
    // [4, 2, 0] < ====== goal
    return results;
}

export function mungeNames(pokemonArray) {
    const results = [];
    for (let poke of pokemonArray) {
        console.log(pokemon, poke.id);
        const data = findById(pokemon, poke.id);

        results.push(data.pokemon);
    }

    return results;
}

export function mungeColors(pokemonArray) {
    const results = [];
    for (let poke of pokemonArray) {
        const data = findById(pokemon, poke.id);
        results.push(data.color_1);
    }
    return results;
}