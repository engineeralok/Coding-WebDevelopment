let elem = document.getElementById("reloadButton");

elem.classList.add("color");
elem.classList.remove("color");


console.log (elem.innerHTML);
console.log (elem.innerText);

// document.getElementsByTagName

let createdElem = document.createElement("p");
let text = "This is a created paragraph";

createdElem.append(text);
elem.appendChild(createdElem);

createdElem.append(text);
elem.appendChild(createdElem);

console.log(createdElem);

let createdElem2 = document.createElement("em");
let text2 = "This is a emphasized text";
createdElem2.append(text2);

elem.replaceChild(createdElem2,createdElem);

elem.removeChild(createdElem2);

// document.querySelector;
// document.querySelectorAll;

