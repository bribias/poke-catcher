import { findById } from './utils.js';
import pokemon from '../data/pokemon.js';

// const pokeScore = [
//     {
//         captured: 4,
//         id: 5,
//     },
//     {
//         captured: 2,
//         id: 10,
//     },
//     {
//         captured: 0,
//         id: 21,
//     },
// ];


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
        const data = findById(pokemon, poke.id);
        console.log(data.pokemon);
        results.push(data.pokemon);
    }


    // YOUR CODE HERE
    // initialize an empty array// loop through each item in pokemonArray
    //loop through each item in pokemonArray
    //      get data from pokemon list using findById
    // push data.pokemon onto the results

    // expected output : ['charmander', 'squirtle', 'pidgey']
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