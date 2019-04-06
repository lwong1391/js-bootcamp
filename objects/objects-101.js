let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(myBook);
console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';
console.log(`${myBook.title} by ${myBook.author}`);


let person = {
    name: 'Linda',
    age: 50,
    location: 'Sydney'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);

person.age +=1;
console.log(`${person.name} is ${person.age} and lives in ${person.location}`);

