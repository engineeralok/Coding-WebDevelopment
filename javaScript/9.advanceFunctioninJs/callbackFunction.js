// //function

// function greet(name, callback) {
//     console.log('Hello ' + name );
//     callback();

// }

// //callback function
// function callme() {
//     console.log('I am callback function');
// }

// //passing function as an argument
// greet('Peter', callme);

const calculate = (a, b, operation) => {
    return operation(a, b);
}

//method 1
const addition = calculate(3, 4, function (a, b) {
    return a + b;
});

console.log(addition);

//method 2
const substraction = (a, b) => a - b;

const subResult = calculate(8,3, substraction);

console.log(subResult);

//method 3

function multiply(a,b){
    return a * b;
}

const mulResult = calculate(8,3, multiply);

console.log(mulResult);
