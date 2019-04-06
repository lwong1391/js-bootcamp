// function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!');
}

greetUser();

let square = function(num) {
    console.log(num);
    let result = num * num;
    return result;
}

console.log(square(3));

let value = square(5);
console.log(value);

// ConvertFahrenheitToCelcius
 
// calculate fahrenheit to celcius
// T(°C) = (T(°F) - 32) × 5/9

let convertFahrenheitToCelcius = function(fahrenheit) {
    return (fahrenheit -32) * 5 / 9;
}

console.log(convertFahrenheitToCelcius(32));
console.log(convertFahrenheitToCelcius(68));