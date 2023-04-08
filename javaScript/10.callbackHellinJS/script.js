// console.log('hello');

// setTimeout(() => {
//     console.log('this will execute 3 sec later')
// }, 3000);

// console.log('world');
// console.log('three');


function getCheese(callback) {
    setTimeout(() => {
        const cheese = '🧀';
        console.log('here is your cheese', cheese);
        callback(cheese)
    }, 2000);

    
}

// getCheese();

// function makeDough() {
//     setTimeout(() => {
//         const dough = cheese + '🍽️';
//     }, 2000);
// }


function makeDough(cheese, callback) {
    setTimeout(() => {
        const dough = cheese + '🍽️';
        console.log('here is your dough', dough);
    }, 2000);
}

function bakePizza(dough, callback) {
    setTimeout(() => {
        const pizza =dough + '🍕'
        console.log('here is your pizza', pizza);
        callback(pizza);
    }, 2000);
}

// getCheese((cheese) => {
//     console.log('got the cheese', cheese);
// });
getCheese((cheese) => {
    makeDough(cheese, (dough)=>{
        bakePizza(dough, (pizza)=>{
            console.log('got my pizza', pizza);
        })
    });
});



// pizza -> dough -> cheese
