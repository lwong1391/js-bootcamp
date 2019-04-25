// Primitive value: string, number,boolean, nukk, undefined

// Object: myObject --> Object.prototype ==> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean:myBoolean --> Boolean.prototype --> Object.prototype --> null

const puzzleEl = document.querySelector('#puzzle');
const guessEl = document.querySelector('#guesses')

const game1 = new Hangman('car parts', 2) ;

puzzleEl.textContent =  game1.puzzle; 
guessEl.textContent = game1.statusMessage;

window.addEventListener('keypress', (e) => { 
    const guess = String.fromCharCode(e.charCode);
    game1.makingGuess(guess);     
    puzzleEl.textContent =  game1.puzzle; 
    guessEl.textContent = game1.statusMessage;
})

getPuzzle('2').then(puzzle => {
    console.log(puzzle);
}, (error) => {
    console.log(`Error: ${error}`);
}) 

getCountry('HK').then(country => {
    console.log(`${country.alpha2Code}: ${country.name}`);
}, (error) => {
    console.log(`Error: ${error}`);
})

// Fetch API
fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
    if (response.status === 200) {
        return response.json()
       
    } else {
        throw new Error('Unable to fetch the puzzle')       // trigger the catch call below
    }
}).then((data) => {
    console.log(`Fetch: ${data.puzzle}`)
}).catch((error) => {
    console.log(error)
})