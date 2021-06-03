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
