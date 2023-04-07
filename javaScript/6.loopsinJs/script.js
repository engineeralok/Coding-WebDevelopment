// For loop 
//for(initialization;condition;update){
        // body of loop
// }

// for (let index = 0 ; index<5 ; index++) {
//     console.log('Alok', index);
// }

// while loop
// while(condition){
        /// body of loop
// }

// let step = 0;
// while (step < 5) {
//     console.log('step', step);
//     step += 1;
// }

//do-while loop
// do{
    // body of loop
// } while (condition)

// let step = 0;

// do {
//     console.log('step', step);
//     step += 1;
// } while (step < 5);


let step = 0;
while (step < 5) {
    step += 1;
    if(step == 2){
        continue;
    }
    console.log('step', step);
}