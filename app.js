import { capturePokemon, encounterPokemon } from './functions/localStorage-utils.js';
import RawPokeData from './data/pokemon.js';
// import functions and grab DOM elements
const radio1 = document.querySelector('#poke-1');
const radio2 = document.querySelector('#poke-2');
const radio3 = document.querySelector('#poke-3');
const img1 = document.querySelector('#poke-img-1');
const img2 = document.querySelector('#poke-img-2');
const img3 = document.querySelector('#poke-img-3');
const button = document.querySelector('#throw');

renderThreePokemon();
// set event listeners 
button.addEventListener('click', () => {
    const selectedRadio = document.querySelector(':checked');
    const selectedPokemonId = selectedRadio.value;

    capturePokemon(selectedPokemonId);
    renderThreePokemon();
});
// get user input
// use user input to update state 
// update DOM to reflect the new state

function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * RawPokeData.length);
    const randomPokemom = RawPokeData[randomIndex];
    return randomPokemom;
}

function renderThreePokemon() {
    let poke1 = getRandomPokemon();
    let poke2 = getRandomPokemon();
    let poke3 = getRandomPokemon();

    while (
        poke1.id === poke2.id
      || poke1.id === poke3.id
      || poke2.id === poke3.id
    ) {
        poke1 = getRandomPokemon();
        poke2 = getRandomPokemon();
        poke3 = getRandomPokemon();

    }

    encounterPokemon(poke1.id);
    encounterPokemon(poke2.id);
    encounterPokemon(poke3.id);

    img1.src = poke1.url_image;
    img2.src = poke2.url_image;
    img3.src = poke3.url_image;

    radio1.value = poke1.id;
    radio2.value = poke2.id;
    radio3.value = poke3.id;
}