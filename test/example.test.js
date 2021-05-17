// IMPORT MODULES under test here:
// import { example } from '../example.js';
import RawPokeData from '../poke.js';
const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    // const expected = RawPokeData[0];

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = RawPokeData;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(typeof actual, 'object');
});