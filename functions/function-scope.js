// Global scope (convertFarenheitToCelcius, tempOne, tempTwo)
    // Local scope (fahrenheit, celcius)
        // Local scope (isFreezing)


let convertFarenheitToCelcius = function(fahrenheit) {
    let celcius = (fahrenheit -32) * 5 / 9; 

    if (celcius <= 0) {
        let isFreezing = true;
    }

    return celcius;
}

let tempOne = convertFarenheitToCelcius(32);
let tempTwo = convertFarenheitToCelcius(68);

console.log(tempOne);
console.log(tempTwo);

