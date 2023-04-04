// //Local Storage and Session Storage in JavaScript

// //HTML web Storage objects
// //console.log(window.localStorage) -> It stores the data with no expiration date
// //window.sessionStorage -> It stores the data for one session. That means the data is lost when th ebrowser tab is closed

// //Local Storage :-
// //The way to store data on the client's computer is by local storage

// //Session Storage :-
// //The session storage is used to store data only for a session, meaning that it is stored until the browser or tab is closed

// //create entries :-
// //setItem(key,value) -> we can create the key/value pair entries with localStorage.setItem, providing a key and a value

// localStorage.setItem('Name','Alok');
// console.log(window.localStorage);

// //reading entries :-
// //getItem(key) -> we can read enries with localStorage.getItem
// let name = localStorage.getItem('Name');
// console.log(name);

// //clearing everything :-
// //clear() -> can delete on clear everything that's stored in localStorage
// // localStorage.clear();
// console.log(window.localStorage);

// //deleting Entries :-
// //removeItem(key) -> delete an entry with the removeItem method
// localStorage.removeItem('Name');
// console.log(window.localStorage);

// //Store an array :-
// let impArray = ['mango','apple','banana'];
// localStorage.setItem('sabji',impArray);
// console.log(window.localStorage);
// //This will save the array as string in local Storage

// //JSON.strigify -> save array as array in local storage

// localStorage.setItem('sabji',JSON.stringify(impArray));
// //JSON.parselocationStorage -> show output of an saved array as an array not like a string
// let arr = JSON.parse(localStorage.getItem('sabji'));
// console.localStorage(arr);