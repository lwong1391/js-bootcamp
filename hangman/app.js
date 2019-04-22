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

