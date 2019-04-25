const functionOne = (test) => {
    const x = 5;
    test(x);
}

functionOne(number => {
    console.log('My number is', number);
})