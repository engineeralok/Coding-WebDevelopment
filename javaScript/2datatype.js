//#1. Primitive Datatypes:- 
//A primitive data value is a single simple data value with no additional properties and methods.

// The typeof operator can return one of these primitive types:

// string
// number
// boolean
// undefined
// null

//1.String DataType:-
//String type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer values.


var name = "Alok";
console.log("My name is" + " " + name );

//typeof :- helps to find datatype of variable.

console.log("Data type of name is " + (typeof name));

//Values of other types can be converted to strings using the String() function.

//converting a number value into string
let marks = 34;
console.log(marks, (typeof marks));
marks = String(marks);
console.log (marks, (typeof marks));

//converting a boolean value into string
let boool = true;
console.log(boool,(typeof boool));
boool = String(boool);
console.log(boool, (typeof boool));


//2.Number DataType:-
//Number is a primitive wrapper object used to represent and manipulate numbers like 37 or -9.25.
//The Number constructor contains constants and methods for working with numbers.

let num = 37;
console.log(num +" "+ "Data type of num is " + (typeof num));

//Values of other types can be converted to numbers using the Number() function.

let string = "334";
console.log(string, (typeof string));
string = Number(string);
console.log(string,(typeof string));

// converting a boolean value into Number
boool = false;
console.log(boool, (typeof boool));
boool = Number(boool);
console.log(boool, (typeof boool));


//3.Boolean DataType:-
//Boolean represents a logical entity and can have two values: true and false. 
//Boolean is a datatype which store only two values true(1) and false(0);
let boolean = true;
console.log(boolean, (typeof boolean));


//4.Null DataType:-

//The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations.
let none = null;
console.log(none, (typeof none));

//Datatype is object but null is a primitive datatype.

//5.Undefined DataType:-
// The global undefined property represents the primitive value undefined. It is one of JavaScript's primitive types.
let undef = undefined;
console.log(undef, (typeof undef));


//#2. Non-Primitive DataTypes/Complex DataTypes/Reference DataTypes:-
// Array
// object
// function
// Date

// --> The typeof operator returns "object" for objects, arrays, and null.

// The typeof operator does not return "object" for functions.

//1.Array DataType:-
//JavaScript arrays are used to store multiple values in a single variable.
//It is a set of same datatype.
let myarr = [1,2,3,4,5];
console.log(myarr, (typeof myarr));

//convert an array into string 
myarr = String(myarr);
console.log(myarr,(typeof myarr));

//2.Object literals:-
//In real life, a car is an object.
// A car has properties like weight and color, and methods like start and stop:
let studentsMarks = {
    Alok : 99,
    Rahul : 35,
    Rohan : 11,
    Shubham : 10
}

console.log(studentsMarks, (typeof studentsMarks));

//3.Function:-
//A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls it).
function myFunction(a,b){
    return a + b;
}

let x = myFunction(4,3);

console.log(x, (typeof myFunction));

//4.Date:-

