// Named export
// Default export

console.log('utilities.js');

const add = (a, b) => a + b;

const name = 'andrew';

const square = (x) => x * x;
console.log('from my code')
export { add, name, square as default };