// Document Object Model 
//document.all -> shows all element of HTML document
let htmlEle = document;
htmlEle = document.all;
console.log(htmlEle);

//document.forms -> to get the forms from HTML document
let forms = document.forms[0];
console.log(forms);

//document.link -> to get links of the HTML document which is present in the page 
let links = document.links;
console.log(links);

//document.images -> it will return all HTML <img> tag
let img = document.images;
console.log(img);

//document.scripts -> it will return all html <script> element
let script = document.scripts;
console.log(script);

//to access document properties 
// -> document.propertyName