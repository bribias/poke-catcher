// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { findPokemonName } from '../functions/utils.js';

const test = QUnit.test;

const pokeGrab = [
    {
        id: 1,
        name: 'bulbasaur',
        caught: 1,
        encountered: 0
    },
    {
        id: 2,
        name: 'ivysaur',
        caught: 0,
        encountered: 1
    }
];

test('grab pokemon name', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const expected = ['bulbasaur', 'ivysaur'];

    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual = findPokemonName(pokeGrab);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});