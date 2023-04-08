// function getCheese() {
//     setTimeout(() => {
//         const cheese = '🧀';
//         return cheese;
//     }, 2000);
// }

//Promise

const ticket = new Promise((resolve, reject) => {
    const isBoarded = false;
    if (isBoarded) {
        resolve('you are in the flight');
    } else {
        reject('your flight has been canceled');
    }
});

ticket.then((data)=> {
    console.log("wohoooo!",data);
}).catch((data)=>{
    console.log("oh no!",data);
}).finally((data)=>{
    console.log("I will always be executed");
})

