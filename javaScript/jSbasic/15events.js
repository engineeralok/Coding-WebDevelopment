//Event and event listener and event handler 
//HTML-attribute 
//we can set a handler in HTML with an attribute named on<event>
//for example see button created in index.js

// addEventListener() -> add a function to be called when a specified event occurs.

//addEventListener(event->type of event, function->the function we want to call,capture->optional tells whether to use event bubbling or event capturing)

// function MyFunction() {
//     console.log("you clicked the heading");
//     //location.href -> used to make it a link
//     // location.href = "codewithharry.com"
//     let variable;
//     // e.target -> to get targeted element  
//     variable = heading.target;
//     //e.target.className -> get classname
//     variable = heading.className;
//     //e.target.id -> get id
//     variable = heading.id;
//     //e.offsetX -> direction in x-axis from target
//     variable = heading.offsetX;
//     //e.offsetY -> direction in y-axis from target
//     variable = heading.offsetY;


//     // variable = heading.clientX
//     console.log(variable);
// }

// let heading = document.getElementById('heading');
// heading.addEventListener('click',MyFunction);

//removeEventLishener() -> Removing event is as smple as adding an event handler
// heading.removeEventListener('click',MyFunction);

//location.href -> return the url of the current page
// console.log(location.href);

document.getElementById("heading").addEventListener("click", function(e) {
    let variable;
    console.log("You have clicked the heading");
    variable = e.target; // e.target -> to get targeted element  
    variable = e.target.className; //e.target.className -> get classname
    variable = Array.from(e.target.classList);
  
    variable = e.target.id; //e.target.id -> get id
    variable = e.offsetX; //e.offsetX -> direction in x-axis from target
    variable = e.offsetY; //e.offsetY -> direction in y-axis from target
    variable = e.clientX; //e.clientX -> direction in x-axis from browser window
    variable = e.clientY; //e.clientY -> direction in y-axix from browser window
    console.log(variable);
    // location.href = '//codewithharry.com'
});

//Some events
//mouseover -> event fired when mouse hover the element 

//dblclick -> event occur when we double click on element

//mouseup -> event occur when button on a pointing device is released while the pointe is loacated inside

//mousedown -> event occur when wheel of the mouse is clicked or scrolled down or right click

//mouseenter -> when a mouse initially moved so that its hotspot is whithin the element at which the event was fired

//mouseleave -> when the mouse or other pointing device moved out of it

//mousemove -> when a mouse is moved while the cursor's hotspot is inside it