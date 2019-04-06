let name = ' Andrew Mead ';

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());

let password = 'abc123pvvvv098';
console.log(password.includes('password'));

console.log(name.trim());

// isValidPassword
// true if length is more than 8 and it doesn't contain the word password

let isValidPassword = function(password) {
    // if (password.length > 8 && !password.includes('password')) {
    //     return true;
    // } else {
    //     return false;
    // }

    return password.length > 8 && !password.includes('password');
}

console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abc123!@#$%&'));
console.log(isValidPassword('abcdfdklsjdkpassword'));
