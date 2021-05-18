//console.log()-> for print a message in console log
// console.time();

console.log("Hello JavaScript");
console.log("Print an array:- "+[23,3,45,576]);
console.log("Print an integer value:- " + 32);
console.log("Print a boolean value:- " +true);
console.log("Print an object:- " + {name:'Alok',Age:18,Branch:'ITESM'});

//console.table()-> Prints a whole object as a table.

console.table({name:'Alok',Age:18,Branch:'ITESM'});
console.table({pubg:"Players unkown battleground",bgmi:"Battleground mobile india"});

//console.warn()-> To print a warning in console window 
console.warn("This is a warning go back and collect garbage.")
console.warn("Welcome back in JavaScript. Hope you are doing great");

// console.timeEnd();

//console.clear()-> To clear everything from console window.

// console.clear();

//To see the how much time taken to complete the excution 
//Use console.time() at the begining of the code and console.timeEnd() at the ending of the code

//console.assert()-> method writes an error message to the console if the assertion is false. If the assertion is true, nothing happens. 
const errmsg = "The number is not even";
for(let number = 0; number <=10; number++){
    console.log("The number is" + number);
    console.assert(number%2===0,{number:number,errmsg:errmsg});
} 

//console.error()-> Outputs an error message to the Web Console.
console.error("This is a error message in ");
