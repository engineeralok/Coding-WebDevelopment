//Function in js
//Function:-
//Function is a block of code which has statement, condition, and algorithms which can be used many times.

function greet(name, thanks = 'thank you'){
    console.log(`Good morning ${name}. I am fine. ${thanks}`);
}

let name = "Alok";
let thanks = "Thank you so much. How are you?";
let name2 = "Dheeru";

greet(name,thanks);
greet(name,'Thanks a lot!');
greet(name2,thanks);

//return a value to the function 
let againGreet = function(name,thanks){
    let msg = `GooD Morning ${name} And ${thanks}`;

    return msg;
}

let val = againGreet(name,thanks);
console.log(val);

//make a function i object variable:-
const myObj ={
    firstName : "Alok",
    game : function(){
        return "gta"
    }
}

console.log(myObj.game());

//print an array using function :-
arr = ['fruit','vegitable','furniture'];

arr.forEach(element => {
    console.log(element)
});

arr.forEach(function (element,index){
    console.log(element,index)
});