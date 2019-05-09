// The rest parameter
const calculateAverage = (thing, ...numbers) => { 
    let sum =0;
    numbers.forEach((num) => sum += num)
    const average = sum / numbers.length
    return (`The average ${thing} is ${average}`)
}

console.log(calculateAverage('grade', 0, 100, 88, 64))


// const printTeam = (teamName, coach, ...players) => {
//     console.log(`Team: ${teamName}`)
//     console.log(`Coach: ${coach}`)
//     console.log(`Players: ${players.join(', ')}`)
//     console.log(players)
// }   

// printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Hebert', 'Sherry')

// The spread parameter
const printTeam = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(', ')}`)
    console.log(players)
}  

const team = {
    name: 'Liberty',
    coach: 'Casey Penn',
    players: ['Marge', 'Aiden', 'Hebert', 'Sherry']
}

printTeam(team.name, team.coach, ...team.players)

let cities = ['Barcelona', 'Cape Town', 'Bordeaux']
console.log('cities:', cities) 
cities = [...cities, 'San Francisco']
console.log('cities:', cities) 

let house = {   
    bedrooms: 2,
    bathrooms: 1.5,
    yearBuilt: 2017
}
console.log('house:', house)
let newHouse = {
    basement: true,
    ...house,
    bedrooms: 3
}
newHouse.yearBuilt = 2018
console.log('newHouse:', newHouse)

const person = {
    name: 'Scott',
    age: 55
}

const location = {
    city: 'Melbourne',
    country: 'Australia'
}

const overview = {
    ...person,
    ...location
}

console.log(overview);

// destructuring
const todo = {
    id: 123,
    text: 'Pay the bills',
    completed: false
}

// object
const { text:todoText, completed, details='No details provided', ...others} = todo;
console.log('others:', others)
console.log('details:', details)
console.log('completed:', completed)
console.log('todoText:', todoText)

// Array
const age = [65, 0 ,13] 
const [firstAge, ...otherAges] = age
console.log('otherAges:', otherAges)
console.log('firstAge:', firstAge)

// function
const printTodo = ({ text, completed}) => {
    console.log(`${text}: ${completed}`)
}

printTodo(todo)