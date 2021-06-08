//id -> #idname -> getElementById()
//class -> .classname -> getElementByClassName()
//tag -> tagname -> getElementByTagName()
//signle selector -> querySelector()
//all selector -> querySelectorAll()

//Single element selector -> it is used to select single HTML elements within a document

//accessing elements by id :-
//getElementById() -> this will select the html element which has given Id. We can get and modify that element also. It will return null if no element with the specified id exists.
let element = document.getElementById('heading');
console.log(element);

//.className -> this will get the classname of the selected element
element = element.className
console.log(element);

//.childnodes -> this will print all the childnode of the selected element.
let ele = document.getElementById('form');
ele = ele.childNodes;
console.log(ele);

//.parentnodes -> This will ptint parent node of selected element
let parentofA = document.getElementById('atag');
parentofA = parentofA.parentNode;
console.log(parentofA);

//.innertext -> This will change the inner text of the selected element.
parentofA.innerText = 'Goto Google.COM';
console.log(parentofA);

//.innetHTML -> This will change the whole HTML element, tags with content. 
parentofA.innerHTML = '<li>Add new line</li>';
console.log(parentofA);

//Query Selector :- 
//It will select the first element that matches the specified css selector in the document. The query-selector() method only returns the first element that matches the specified selectors.

let elementTwo = document.querySelector('#form');
console.log(elementTwo);

//Multiple element selector:-
//It is use to select multiple HTML elements within a document. There are three ways in which we can select elements in a Dom using multiple element slectors.
 //querySelectorAll() 
 //getElementsByTagName()
 //getElementsByClassName()

 //getElementByClassName() -> This will select all the elements of the given classname.
let cName = document.getElementsByClassName('h1Heading');
console.log(cName);

//getElementByTagName() -> Select all the elements of the given tagname.
let tName = document.getElementsByTagName('a');
console.log(tName);

//Itarate of all the element of given tagname 'div'
// let div = document.getElementsByTagName('div');
// Array.from(div).forEach(element => {
//     div = div.style.color = "blue";
// });

//Traversign the DOM :-
// which means "move through", are used to "find" (or select) HTML elements based on their relation to other elements. Start with one selection and move through that selection until you reach the elements you desire.

//.children -> Work as child nodes but exclude, comments, newline etc. It only shows elements.
let cont = document.querySelector('.h1Heading');
console.log(cont);
console.log(cont.children);

//.nodeName -> To find the nodename of the given index.
let nodeName = cont.childNodes[1].nodeName;
console.log(nodeName);

//.nodeType -> find the type of the given node.
//1 = element
//2 = attribule
//3 = text node
//8 = comments
//9 = document
//10 = doctype
//11 = a documentFragment node

let nodeType = cont.childNodes[0].nodeType;
console.log(nodeType);

let container = document.querySelector('div.C');
console.log(container.children[0].children);

//.firstChild -> get the first child of selected element
console.log(container.firstChild);

//.firstElementChild -> get the first child element 
console.log(container.firstElementChild);

//.lastChild -> Get the last child element of the selected element
console.log(container.lastChild);

//.lastElementChile -> get the last child element of the selected element
console.log(container.lastElementChild);

//.childElementCount -> counts all the child elements
console.log(container.childElementCount);

//Traversing upword :-
//.parentElement -> gets the parent elemen of the selected element
console.log(container.parentElement);

//Traversing sideways :-
//.nextSibling -> gets the next sibling of the child
console.log(container.nextSibling);

//.nextElementSibling -> gets the next element sibling of the child 
console.log(container.nextElementSibling);

//.previousElementSibling -> to select previous element of the selected element
console.log(container.previousElementSibling);

//Creating, Removing & Replacing Elements :-
//createElement() -> creates a element with given tagname.
let newElement = document.createElement('li');

//give id and class to the created element
//.className -> give a class name to the created element
newElement.className = "liClass";

//.id -> give a id to the created element
newElement.id = "liID";
console.log(newElement);

//setAttribute() -> give a attribute and its value to the created element
newElement.setAttribute('tittle','created_Element');
console.log(newElement);

//.innerText -> to change or insert the text in a seleced element
newElement.innerText = "hello i am a created li element";

let ul = document.querySelector('.ulElement');
console.log(ul);

//apeendChild() -> appends or insert or put the created child i the selected element. Insert as a child 
ul.appendChild(newElement);
console.log(ul);

//createTextNode() -> to create a text node
let text = document.createTextNode('I am a text node append in new li element');
newElement.appendChild(text);

//create a new element and replace it with newElement
let newHeading = document.createElement('h1');
newHeading.id = 'NewH1id';
newHeading.className = "NewH1class"
let Tnode = document.createTextNode("This is a new Heading created with javaScript");
newHeading.appendChild(Tnode);

//replaceWith() -> replace an element with the new element
newElement.replaceWith(newHeading);

//replaceChild() -> Replace the child with new child
//showing error :-- my mind fucked up
// let tenode = document.createTextNode('Hello this text is replaced')
// contText = document.getElementsByClassName('.h1Heading');
// contText.replaceChild(tenode,contText.childNodes[0]);

//removeChild() -> Remove a child from selected element
// let elementUl = document.getElementsByClassName('ulElement');
// elementUl.removeChild(document.getElementById('heading'));

//getAttribute() -> Get the attribute of the selected element
let pr = cont.getAttribute('class');
console.log(pr);

//hasAttribute() -> return true if given attribute is in the selected element elese return false
pr = cont.hasAttribute('class');
console.log(pr);

//removeAttribute() -> remove the given attribute from the selected element
pr = cont.removeAttribute('title');
console.log(cont);