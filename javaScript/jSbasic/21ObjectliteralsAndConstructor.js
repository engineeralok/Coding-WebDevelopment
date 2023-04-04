console.log("hello world");

// Object 
// Object is a unique identity which has properties and methods.

// Objects can contain related code and data, representing information about the thing we are trying to model, and functionality that we want it to have. Object data is stored neatly inside an object package, making it easy to structure and access. 

// In JavaScript, objects created using object literal are singletons. This means when we made a change in an object, it affects the object entire the script. Whereas if an object is created using the constructor function, then the change will not affect the object throughout the script.


// Objects created using object literal:-
// Since these are singletons, a change to an object affects the object's entire script. A change in one instance will affect all the instances of the object. Object literal is a comma-separated list of name-value pairs inside the curly braces. The object literals encapsulate the data. This minimizes the use of global variables, which can cause problems when combining the code.

//object literals for creating object.
let car = {
    Name : 'Maruti 420',
    topSpeed : 220,
    launchDate : 12/03/2002,
    run : function() {
        console.log("car is running");
    }
}

console.log(car);

// I already seen constructor like these : - 
// new Date()
// "new" keyword:-
// To create a new object instance, we use the "new" keyword to create an object based on a constructor. Adding the "new" keyword is a crucial step when creating an object from a constructor. The new keyword creates a new empty object. It binds property or function, which is declared with this keyword to the new object.

// Objects created using the constructor function:-
// The object that is defined with a function constructor lets us have multiple instances of that object. If the change is made to one instance, it will not affect other instances. As we know that the constructor is essentially a function that acts as a blueprint for creating objects. A convention for declaring constructors is always to capitalize its function name.

// Creating a countructor for cars
function generalCar(givenName,givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is running.`)
    };
    this.analyze = function () {
        console.log(`${this.name} is slower by ${200-this.topSpeed} than Mercedes`);
    };
}
car1 = new generalCar("Ford",220);
car2 =  new generalCar('Marut alto', 120);
car3 = new generalCar("Mercedes",200);
console.log(car1,car2,car3);
