const sum = (num1, num2) => num1 + num2;
const PI = 3.14;
let isChecked = false;

class SomeMathObject {
    constructor(name, setChecked) {
        console.log(name + ': ' + setChecked);
    }
}

module.exports = {
    sum: sum,
    PI: PI,
    isChecked: isChecked,
    SomeMathObject: SomeMathObject
};
