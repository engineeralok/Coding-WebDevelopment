//String type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer values.


var name = "Alok";
console.log("My name is" + " " + name );

//typeof :- helps to find datatype of variable.

console.log("Data type of name is " + (typeof name));

//Values of other types can be converted to strings using the String() function.

let marks = 34;
console.log(marks, (typeof marks));
marks = String(marks);
console.log (marks, (typeof marks));

//Number is a primitive wrapper object used to represent and manipulate numbers like 37 or -9.25.
//The Number constructor contains constants and methods for working with numbers.

let num = 37;
console.log(num +" "+ "Data type of num is " + (typeof num));

//Values of other types can be converted to numbers using the Number() function.
