//Event Handler
// function myFunction(){
//     console.log('I was clicked');
// }

// const mouseOver = () => {
//     console.log('mouse over');
// }

// const keyPressEvent = () => {
//     console.log('key was pressed');
// }

// function keyUpEvent() {
//     console.log('key up was presssed');
// }

// function keyDownEvent() {
//     console.log('key down was presssed');
// }

//Event Listeners
const box1 = document.getElementById('box-1');
// box1.addEventListener('click', ()=>{
//     console.log('click by event listener');
// });

// box1.addEventListener('click', (e)=>{
//     console.log('click by event listener 2', e);
// });

// box1.addEventListener('mousemove',  (e) => {
//     console.log('mouseover by event listener', e.clientX, e.clientY)
// })

// const nameInput = document.getElementById('nameInput');
// nameInput.addEventListener('keypress', (e) => { 
//     console.log('key', e.key);
// })
 
// nameInput.addEventListener('focus', (e) => {
//     console.log('key', e);
// });

box1.addEventListener('click', () => {
    console.log('clicked on box');
});

const container = document.getElementById('container');

container.addEventListener('click', () => {
    console.log('clicked on container');
}, true);

