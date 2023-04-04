//Conditional statements are used to perform different actions based on different conditions.
//Conditional Statements

//Use if to specify a block of code to be executed, if a specified condition is true

// Use else to specify a block of code to be executed, if the same condition is false

// Use else if to specify a new condition to test, if the first condition is false

//prompt() -> Pop ups a small window in the browser and takes a value from the user

let age = prompt('Enter your age');
if(age>=18){
    if(age==18){
        alert("You can drive a car");
    }
    else{
        alert("You can drink");
    }
}

else{
    alert("you are a kid");
}

//check if a variable is defined or not:-
if(typeof age !== 'undifined'){
    console.log('var is defined');
}
else{
    console.log('var is definde');
}

