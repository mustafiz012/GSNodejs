console.log("Hello from the other side");
const utils = require('./utils');

console.log(utils);
console.log(utils.sum(1, 2));
console.log(utils.PI);
console.log(utils.isChecked);
new utils.SomeMathObject("Checking", true);

//==>>Event module
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('utils', (num1, num2) => {
    console.log('utils event has occurred: ' + utils.sum(num1, num2))
});

eventEmitter.emit('utils', 2, 3);

class Person extends EventEmitter {

    constructor(name, age) {
        super();
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

}

let babai = new Person('Babai', 25);
babai.on('name', () => {
    console.log('My name is ' + babai.name);
    console.log('My age is ' + babai.age);
});

let pedro = new Person("Pedro", 20);
pedro.on('name', () => {
    console.log('My name is ' + pedro.name);
});

//these get executed synchronously
pedro.emit('name');
babai.emit('name');

//==>>Readline module
const readLine = require('readline');
readLine.createInterface({input:process})