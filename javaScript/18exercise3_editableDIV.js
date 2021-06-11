//Creating editable div using javaScript 

//you have to create a div and inject it into the page which contains a heading
//whenever someon clicks on the div, it should be converted into an editable item. 
//Whenever use clicks away (blur). Save the note into the local storage.

//create a div
let divElem = document.createElement('div');

//set attributes to div
divElem.setAttribute('id','elem');
divElem.setAttribute('class','elem');
divElem.setAttribute('style','border : 2px solid black; width : 100px; height : 50px; margin : 25px; padding : 10px');

//create text node
let text = document.createTextNode('This is a editable div. Click to edit');

//append or insert the text node under div
divElem.appendChild(text);

//Grab the main container
let container = document.getElementById('container');

//Grab the element where to insert the div
let rbtn = document.getElementById('reloadButton');

//insert the div element before rbtn which id is reloadButton
//insertBefore -> used to insert the element before the given element
container.insertBefore(divElem,rbtn);




