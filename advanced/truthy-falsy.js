const products = [{name: 'computer mouse'}];
const product = products[0];

// Truthy - values that resolve to true in the boolean context
// Falsy - value that resolve to false in the boolean context
// Falsy values - false, 0, empty string, null, undefined, NaN

if (product) {
    console.log('product found')
} else {
    console.log('product not found')
}


