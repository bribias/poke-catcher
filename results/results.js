import { getPokedex, setPokedex } from '../functions/localStorage-utils.js';
import { mungeNames, mungeCaptured, mungeColors } from '../functions/data-utils.js';

let ctx = document.getElementById('myChart').getContext('2d');
let resetButton = document.querySelector('#reset-game');

const pokedex = getPokedex();
console.log(pokedex);
const names = mungeNames(pokedex);
console.log(names);
const capturedData = mungeCaptured(pokedex);
console.log(capturedData);
const colors = mungeColors(pokedex);


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

resetButton.addEventListener('click', () => {
    // redirect to home
    window.location = '/';
    console.log(resetButton);
    // clear local storage
    setPokedex([]);
});