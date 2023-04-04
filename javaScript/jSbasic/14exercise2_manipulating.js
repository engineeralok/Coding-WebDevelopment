//create a heading element with text as "Go to CodeWithHarry" and create a tag outside it with href = "https://wwww.codewithharry.com"
//createElement -> used to create a html element with javaScript
let heading = document.createElement('h1');
let headingText = document.createTextNode('Go To Code With Harry ');
// appendChild is used to insert a childe in a html element 
heading.appendChild(headingText);

let a = document.createElement('a');
a.href = "https://www.codewithharry.com";
a.appendChild(headingText);

container = document.getElementById('container');
container.appendChild(a);
