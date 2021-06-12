//Creating editable div using javaScript 

//you have to create a div and inject it into the page which contains a heading
//whenever someon clicks on the div, it should be converted into an editable item. 
//Whenever use clicks away (blur). Save the note into the local storage.

//create a div
let divElem = document.createElement('div');

//set attributes to div
divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'elem');
divElem.setAttribute('style', 'border : 2px solid black; width : 180px; height : 50px; margin : 25px; padding : 10px');

//create text node and store text in local storage
let textValue = localStorage.getItem('text');
let text;
if (textValue == null) {
    text = document.createTextNode('This is a editable div. Click to edit');
}
else {
    text = document.createTextNode(textValue);
}

//append or insert the text node under div
divElem.appendChild(text);

//Grab the main container
let container = document.getElementById('container');

//Grab the element where to insert the div
let rbtn = document.getElementById('reloadButton');

//insert the div element before rbtn which id is reloadButton
//insertBefore -> used to insert the element before the given element
container.insertBefore(divElem, rbtn);

//add event listener to the divElem
divElem.addEventListener('click', function () {
    //grab the length of the text area
    let noTextArea = document.getElementsByClassName('textarea').length;
    //if length of textarea is 0
    if (noTextArea == 0) {
        let html = elem.innerHTML;
        divElem.innerHTML = `<textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
    }

    //listen for the blur event on textarea
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function () {
        elem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    })
});




