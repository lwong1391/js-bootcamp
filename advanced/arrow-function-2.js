const car = {
    color: 'Red',
    getSummary: function () {
        return `The car is ${this.color}`
    }
    // getSummary() {
    //     return `The car is ${this.color}`
    // }
}

console.log(car.getSummary())