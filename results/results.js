import { getPokedex, setPokedex } from '../functions/localStorage-utils.js';
import { mungeNames, mungeCaptured, mungeColors, mungeEncounters } from '../functions/data-utils.js';

let ctx = document.getElementById('myChart').getContext('2d');

let resetButton = document.querySelector('#reset-game');

const pokedex = getPokedex();

const names = mungeNames(pokedex);

const capturedData = mungeCaptured(pokedex);

const colors = mungeColors(pokedex);

const encounteredPokemon = mungeEncounters(pokedex);


new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: names,
        datasets: [
            {
                label: '# of Captures',
                data: capturedData,
                backgroundColor: colors,
                borderColor: colors,
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});

let ctx_2 = document.getElementById('myOtherChart').getContext('2d');

new Chart(ctx_2, {
    type: 'polarArea',
    data: {
        labels: names,
        datasets: [
            {
                label: '# of Encounters',
                data: encounteredPokemon,
                backgroundColor: colors,
                borderColor: colors,
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});

resetButton.addEventListener('click', () => {
    // redirect to home
    window.location = '/';

    setPokedex([]);
});