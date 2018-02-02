//second optional item to constructor function to take name and age (default to 0)
//setup brand new method, called getDescription - going to return string, similar to getGreeting, but also take into account age - Corey M is 28 years old.

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
        
    }
}

class Student extends Person {
    constructor (name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor () {
        return !!this.major;
    }
    getDescription () {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor (name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
 
    getGreeting () {
        let greeting = super.getGreeting();

        if (this.homeLocation) {
            greeting = greeting += ` I am visiting from ${this.homeLocation}.`
        }

        return greeting;
    }
}

// Challenge - Traveler will extend the Person class (need to set up new piece of info, similar to how we added major.)
// Add support for homeLocation (third argument for the traveler)
// Override getGreeting
// 1. Hi. I am Andrew Mead. (Use Super method). I'm visiting from 'String / city'.
// 2. If there is no home location, stick with parent string. Hi. I am Andrew Mead.

const me = new Traveler('Corey M', 28, 'Oregon');
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGreeting());

