import uuidv4 from 'uuid/v4';
import validator from 'validator';
import Hangman from './hangman';
import getPuzzle from './requests';

console.log(uuidv4());
console.log(validator.isEmail('foo@bar.com'));
console.log(validator.isEmail('foobar.com'));

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