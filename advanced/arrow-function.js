const square = (num) => num * num;

console.log(square(5));

const people = [
    {
        name: 'Andrew',
        age: 27
    }, 
    {
        name: 'Vilram',
        age: 31
    },
    {
        name: 'Jess',
        age: 22
    }
]

const under30 = people.filter(person => person.age < 30)
console.log('under30:', under30)

const person = people.find((person) =>  person.age === 22)
console.log('person:', person)
console.log('personName:', person.name)

