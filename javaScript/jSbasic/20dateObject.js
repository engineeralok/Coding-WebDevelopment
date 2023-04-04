// Date Object:-
// The Date object is a built-in datatype into the JavaScript language. The Date object is used to deal with dates and times in JavaScript. Once a Date object is created, many methods allow us to operate on it. Most methods allow us to get and set the month, day, year, hour, minute, and second using either local time or universal time. 

let d = new Date;  //return today date

console.log(d);
console.log(typeof d);

let otherDate = new Date('08-12-2020 08:30:09'); //mm-dd-yyyy
otherDate = new Date('03-13-2025');
otherDate = new Date('07/06/2021');
console.log(otherDate);
let a;

// getDay()-> It will return the day of the week (from 0-6)
a = otherDate.getDay();

// getDate()-> It will return the day of the month (from 1-31)
a = otherDate.getDate();

// getMinutes()-> It will return the minutes (from 0-59)
a = otherDate.getMinutes();

// getSeconds()-> It will return the seconds (from 0-59)
a = otherDate.getSeconds();

// getHours()-> It will return the hour (from 0-23)
a = otherDate.getHours();

// getMilliseconds()-> It will return the milliseconds (from 0-999)
a = otherDate.getMilliseconds();

// getTime()-> It will return the number of milliseconds since midnight Jan 1 1970, and a specified date
a = otherDate.getTime();

// getMonth()-> It will return the month (from 0-11)
a = otherDate.getMonth();
console.log(a);

// setDate()-> It will set the day of the month of a date object
otherDate.setDate(23);

// setMonth()-> It will set the month of a date object
otherDate.setMonth(0);

// setFullYear()-> It will set the year of a date object
otherDate.setFullYear(1999);

//setSeconds()-> It will set the second of a date object.
otherDate.setSeconds()


console.log(otherDate);
