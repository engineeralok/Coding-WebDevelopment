// // HTML element access-----------------------------

// const myBody = document.body;

// // myBody.style.backgroundColor = 'yellow';

// console.log(myBody);

// const box2 = document.getElementById('box-2');

// console.log(box2);

// const divs = document.getElementsByTagName('div');

// console.log(divs);

// const boxes = document.getElementsByClassName('box');

// console.log(boxes);

// const random = document.querySelectorAll('.container .random');

// console.log(random);



// Modifying html elements----------------------------------

const box1 = document.getElementById('box-1');
// box1.innerHTML = '<h1>Hello</h1><p>I am paragraph</p>';

box1.style.backgroundColor = 'tomato';
box1.classList.add('round-border');

const boxes = document.getElementsByClassName('box');
for (let i = 0; i < boxes.length; i++){
    boxes[i].classList.add('round-border');
}       

box1.classList.remove('round-border');

// Creating and Appending HTML--------------------------------

const newPara = document.createElement('p');
newPara.innerText = 'This is brand new paragraph';
newPara.classList.add('box');

const container = document.getElementById('container');

container.appendChild(newPara);
