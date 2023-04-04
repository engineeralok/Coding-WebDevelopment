// Math Object 
// The math object is used to perform mathematics tasks. It is a built in static obect. So we do not need to instantiate it. We can access all its properties and methods directly.

//Math object works with the number type. Unlike many other gloal objects. Math is not a constructor. We refer to the constant pi as Math.PI and we call the cos function as Math.cos(x), where x is the methods argutment.

let x = 3;
let y = 6;
let z;
z = x + y;
z = x - y;
z = x * y;
z = y / x;

//Math -> Prints the whole math object
z = Math;

//Math.PI -> prints the value of pi
z = Math.PI;

//Math.ceil() -> always shows a integer value which is vigger than given value
z = Math.ceil(5.3);

//Math.round() -> rounds up the decimal value and shows a integer.
z = Math.round(5.3);
z = Math.round(5.6);
z = Math.round(5.5); 

//Math.floor() -> it will return the largest interger value, lower than or equal to given number.
z = Math.floor(5.3);
z = Math.floor(-5.3);

//Math.abs() -> it will return the absolute value of the given number.
z = Math.abs(-5.3); 
z = Math.abs(-5);
z = Math.abs(5);

//Math.squr() -> it will retun the square root of the given number
z = Math.sqrt(5);
z = Math.sqrt(49);
z = Math.sqrt(64);

//Math.pow() -> it will return the value of base to the power of exponent.
z = Math.pow(2,10);
z = Math.pow(5,25);
z = Math.pow(10,2);

//Math.min() -> it will return the minimum value of the given numbers
z = Math.min(2,3,4,5,7);

//Math.max() -> it will return the maximum value of the given numbers.
z = Math.max(2,3,4,5,6);

//Math.random() -> it will retun the random number between 0(inclusive) and 1(exclusive)
z = Math.random();
let a;
a = (0,1);
a100 = a*100;
a10_100 = 10+a*(100-10);
z = Math.random()*100;
z = 50+Math.random()*(100-50);
z = Math.ceil(50+Math.random()*(100-50)); //use Math.ceil for a full integer number

//Math.tan() -> It will return the tangent of the given number.
z = Math.tan(25);

//Math.cbrt() -> It will return the cube root of the given number.
z = Math.cbrt(64);

console.log(z);

// Converting between degrees and radians:-
// The trigonometric functions such as sin(), cos(),tan() expect angles in radians.

// Since humans tend to think in degrees, and some functions can accept degrees, it is good to keep functions handy that convert between the two. 

function degToRad(degrees) {
    return degrees * (Math.PI / 180);
};
function radToDeg(rad) {
    return rad / (Math.PI / 180);
};

console.log(degToRad(60));




// Key Takeaways:-
// The math object is one of the most important features in JavaScript, as it provides various properties and methods which can perform mathematical operations. We can use mathematical constants such as PI and Log values using the properties provided by Math object such as Math.PI. In addition to the above, we can also invoke the methods provided by Math object such as abs(), ceil(), etc. to perform various mathematical operations on multiple variables.