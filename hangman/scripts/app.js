// Primitive value: string, number,boolean, nukk, undefined

// Object: myObject --> Object.prototype ==> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean:myBoolean --> Boolean.prototype --> Object.prototype --> null

let puzzleEl = document.querySelector('#puzzle');
let guessEl = document.querySelector('#guesses');
let game1;

window.addEventListener('keypress', (e) => { 
    const guess = String.fromCharCode(e.charCode);
    game1.makingGuess(guess);     
    render();
})

const render = () => {
    puzzleEl.innerHTML = ''; 
    guessEl.textContent = game1.statusMessage;

    game1.puzzle.split('').forEach(letter => {
        const letterEl= document.createElement('span');
        letterEl.textContent = letter; 
        puzzleEl.appendChild(letterEl);
    })
} 

const startGame = async () => {
    const puzzle = await getPuzzle('2');
    console.log(puzzle);
    game1 = new Hangman(puzzle, 5);
    render();
}

document.querySelector('#reset').addEventListener('click', startGame);
startGame();