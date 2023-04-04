//concat() -> adds two strings
let html;
html = "<h1>This is a heading</h1>" 
html = html.concat("<p>This is a paragraph</p>");
// document.body.innerHTML = html ;
console.log(html);

//toLowerCase() -> Convert capital letters into small letter of a string

let str = "This STRING is LowerCASE";
str = str.toLowerCase ();
console.log(str);

//toUpperCase() -> Convert small letters into Capital Letters of a string
let str1 = "This String will be writen in Capital letters";
console.log(str1.toUpperCase());

//Print letter of a string with index number
console.log(str1[3]);

//indexOf() -> Retuns the index of the given first letter or word.
console.log(str1.indexOf('will'));
//If we give the word which is not present in the string then it will return -1

//lastIndexOf() -> Returns the index of the given last letter or word
console.log(str1.lastIndexOf('s'));

//charAt() -> returns the letter of the given index
console.log(str1.charAt(8));

//endsWith() -> Returns true when find that given word is in the last else return false.
console.log(str1.endsWith("letters"));

//includes( -> Return true when it finds that given word is included in string else retuns false.)

console.log(str1.includes("letters"));

//substring() -> we can find that which words are occure between the given indexes
console.log(str1.substring(1,5));

//slice() -> same as substring but it can take negative values and shows the output from the end of the string

console.log(str1.slice(-4));
console.log(str1.slice(1,5));

//split() -> It spit the tring and make it an array

console.log(str1.split(''));

//replace() -> Helps to replace a word to given word from a string
console.log(str1.replace('This','that'));

