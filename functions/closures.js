const myFunction = () => {
    const message = 'This is my message';
    const printMessage = () => {
        console.log(message);
    }
    return printMessage;
}

const myPrintMessage = myFunction()
console.log('myPrintMessage:', myPrintMessage)
myPrintMessage()


const createCounter = () => {
    let count = 0;

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter();
console.log('counter:', counter)
counter.increment()
counter.decrement()
counter.decrement()
console.log('counter:', counter.get())

// Adder
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)
console.log('add10:', add10)

console.log(add10(-2))
console.log(add10(20))

// Tipper
const createTipper = (baseTip) => {
    return (amount) => {
        return baseTip * amount
    }
}

const tip15 = createTipper(0.15)
console.log('tip15:', tip15)
console.log(tip15(100));

const tip20 = createTipper(0.20)
console.log(tip20(100));