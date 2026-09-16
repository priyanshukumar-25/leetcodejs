class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {}

const d = new Dog("Rex");

console.log(d instanceof Dog); //true
console.log(d instanceof Animal); //true (dog extend animal)
console.log(d instanceof Object); // true (everything extends object)