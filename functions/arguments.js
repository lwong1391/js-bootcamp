let add = function(a, b, c) {
    return a + b + c;

}

// let result = add(10, 1, 5);
// console.log(result);

// let getScoreText = function(name = 'Anonymous', score = 0) {
//     console.log(name);
//     console.log(score);
// }

// getScoreText('Andrew', 100);
// getScoreText();

let getScoreText = function(name = 'Anonymous', score = 0) {
    // return 'Name: ' + name + ' - Score:' + score;
    return `Name: ${name} - Score: ${score}`;
}

let scoreText = getScoreText('Andrew', 100);
console.log(scoreText);

scoreText = getScoreText(undefined, 99);
console.log(scoreText);

let name = 'Jen';
let age = 12;
console.log(`Hey, my name is ${name}! I am ${age} years old.`);

// total, tipPercent
let getTip = function(total, tipPercent = 0.2) {
    let percent = tipPercent * 100;
    let tip = total * tipPercent;
    return `A ${percent}% tip on $${total} would be $${tip}.`;    
}

let tip = getTip(60);  
console.log(tip);

let getTip = function(total, tipPercent = 0.2) {
    return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}`;   
} 
let tip = getTip(60);  
console.log(tip);

