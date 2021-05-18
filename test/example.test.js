// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { findById } from '../functions/utils.js';

const test = QUnit.test;

const someArray = [
    {
        id: 1,
        name: 'squirtle',
        caught: 0,
        encountered: 0
    },
    {
        id: 2,
        name: 'bulbasar',
        caught: 0,
        encountered: 0
    }
];

test('grab pokemon on id', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    // const expected = RawPokeData[0];
    const expected = "number";

    //Act 
    // Call the function you're testing and set the result to a const
    const foundPoke = findById(someArray, 2);
    
    const actual = foundPoke.id;
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(typeof actual, expected);
});