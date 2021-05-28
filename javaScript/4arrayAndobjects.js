//Array and Objects
//length -> tells the length of an array
let arr = [23,45,76,987];
console.log(arr.length)

//isArray() -> Returs true if given variable is an array
console.log(Array.isArray(arr));

//Mutating or modifying arrays

//push() -> push or add the given value at the end of the array
arr.push(77);
console.log(arr);

//unshift() -> shift or add the given value at the stating of an array
arr.unshift(33);
console.log(arr);

//pop() -> Removes the last element from an array
arr.pop();
console.log(arr);

//shift() -> Removes the first element from an array
arr.shift();
console.log(arr);

//splice() -> helps to remove the array element as we want
arr.splice(1,2);
console.log(arr);

//reverse() -> reverse the whole array
arr.reverse();
console.log(arr);

//concat() -> concat or add two arrays
let arr1 = [1,2,3,4,5];
let arr2 = [11,22,33,44,55];
arr1 = arr1.concat(arr2);
console.log(arr1);

//objects

let myObj = {
    name : "Alok",
    marks : 99,
    age : 18,
    course : "diploma",
}

console.log(myObj); 

//to access the elements of an object
console.log(myObj.name);
console.log(myObj['age']);
