class Person {
    constructor(firstName, lastName, age, likes) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age =age;
        this.likes = likes || [];
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age}.`;
        this.likes.forEach(like => {
            bio += ` ${this.firstName} likes ${like}.`
        })
        return bio;
    }

    set fullName(fullName) {
        const names = fullName.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.fullName} is a ${this.position}`
    }
    getYearsLeft() {
        return 65 - this.age;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    updateGrade(score) {
        this.grade += score
    }
    getBio() { 
        const status = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.firstName} ${this.lastName} is ${status} the class.`        
    }

}

const me = new Employee('Andrew', 'Mead', 27, 'Teacher', ['Teaching', 'Biking'])
me.fullName = 'Clancey Turner'
console.log('employee:', me.getBio());

// const me = new Student('Andrew', 'Mead', 27, 90, ['Teaching', 'Biking'])
// console.log('student:', me.getBio());
// me.updateGrade(-30);
// console.log('student:', me.getBio())
