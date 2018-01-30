// arguments object - no longer bound with arrow functions. If you try to access arguments, it will no longer work.

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 1001));

// this keyword - no longer bound with arrow functions. 

const user = {
    name: 'Andrew',
    cities: ['Philadelphia, New York, Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};
// user.printPlacesLived();
console.log(user.printPlacesLived());


const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply () {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());