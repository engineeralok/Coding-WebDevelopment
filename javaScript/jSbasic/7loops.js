//for loop
for(i = 0 ; i < 100 ; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

//while loop
let j = 0;
while(j < 100){
    if(j % 2 == 1){
        console.log(j);
    }
    j += 1;
}

//do-while loop
let k = 0;
do {
    if(k % 3 == 0){
        console.log(k);
    }
    k += 1;
}
while(k < 3);

// console.clear();

//use break to break the loop
let p = 0;
do{
    console.log(p + 1);
    if(p === 5){
        break;
    }
   
    p += 1; 
}
while(p < 10);

//use continue to skip a stop 
let q = 0;
do{
    if(q == 5){
        q += 1
        continue;
    }
    console.log(q + 1);
    q += 1;

}
while(q < 10);

//print an array using loop
let arr = [2,7,3,4,5,9,3];
for(i = 0 ; i < arr.length ; i++){
    const element = arr[i];
    console.log(element);
}

//forEach :-
//A part of for loop to helps us to print values of array in a simple way
let arr1 = [3,5,4,7,9]
arr1.forEach(function (value) 
    {
    console.log(value);
})

//Iterate objects for loop
let obj = {
    name : "Alok",
    type : "Dangarouns Programmer"
}

for (let key in obj){
    console.log(`the ${key} of object is ${obj[key]}`)
}