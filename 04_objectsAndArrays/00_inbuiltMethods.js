/**********************************************
 * Useful Inbuilt Methods
 * ==================================
 * - typeof
 * - random number
 * - string to array
 * - round down
 * - slice and splice
 * - parseInt
 * - dates
 ***********************************************/
// typeof
var day = 18;
console.log("Age is: ", typeof age);

var courseName = "JavaScript 4 Beginners";
console.log("Name is: ", typeof courseName);

var isCat = true;
console.log("isCat is: ", typeof isCat);

var cars = Array("VW", "Lambo", "Audi");

console.log("Cars is: ", typeof cars);
var colours = ["Red", "Yellow", "Blue", "Black"];
console.log(colours[0]); // Output: Red

// Get random number between 0 and 9
let zeroToNine = Math.floor(Math.random() * 10);
console.log(zeroToNine);

// Get random number between 1 and 10
let oneToTen = Math.floor(Math.random() * 10) + 1;
console.log(oneToTen);

// Turn the string into an array
var string = "Hello World";
console.log(string.split(""));

// Round down to four decimal points
var pi = 3.141592653589793238462643;
console.log(pi.toFixed(4));

// Splice and Slice
let fruits = ["mango", "pineapple", "grapes", "banana"];
// Slice an array
let sliceIndexThree = fruits.slice(3);
console.log(sliceIndexThree);
console.log(fruits);

// Splice an array
let spliceIndexThree = fruits.splice(3);
console.log(spliceIndexThree);
console.log(fruits);

// parseInt
let stringNumber = "7";
let number = parseInt(stringNumber);
console.log(typeof stringNumber);
console.log(typeof number);
console.log(number);

// Dates
let firstDay = new Date(2021, 3, 15);
console.log(firstDay.toISOString());
console.log(firstDay.getFullYear());
console.log(firstDay.getMonth());
console.log(firstDay.toLocaleString());
