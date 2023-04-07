// const a = 12;
// const b = 4;

// const sumOfAB = a + b;

// console.log('result: ' + sumOfAB);
// const resultOfAB = sum(a, b);
// console.log('resultOfAB: ' + resultOfAB);


// const c = 2;
// const d = 3;
// const sumOfCD = c + d;
// console.log('result: ' + sumOfCD);
// sum(c, d);


// function sum(a, b) {
//     const sum = a + b;
//     console.log('the result: ' + sum);
//     return sum;
// }

//nestedFunction

function addSquare(a,b) {

    const sa = square(a);
    const sb = square(b);

    function square(num) {
        return num*num;
    }

    return sa + sb;
}

console.log(addSquare(3,2));