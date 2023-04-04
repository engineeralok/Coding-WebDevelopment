console.log("Hello World");

let obj = {
    name : "Alok",
    Profession : "Web Developer",
    age : 18,
    Address : "Neptune"
}

// JavaScript Prototype :- 
// All objects in JavaScript are instances of Object. A typical object inherits properties from Object.prototype. The Object.prototype object has many built-in methods and properties such as toString(), valueOf(), etc. All objects see the object prototype object changes through prototype chaining unless the properties and methods subject to those changes are overridden further along the prototype chain. This is a very dangerous mechanism to override or extend object behavior.

// JavaScript is a prototype-based language. Whenever we create a function using JavaScript, the JavaScript engine adds a prototype property inside a function. The prototype property is an object where we can attach methods and properties in a prototype object, which enables all the other objects to inherit these methods and properties. As we have studied in tutorial#27, one way to create an object is by using a function constructor.

function Obj(givenName) {
    this.name = givenName;
}

Obj.prototype.getName = function () {
    return this.name;
}

Obj.prototype.setName = function (newName) {
    this.name = newName;
}

let obj2 = new Obj('Alok')

console.log(obj2);

// toLocaleString()-> It will return the string in the local format.

console.log(obj2.toString());


console.log(obj2);