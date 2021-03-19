/**********************************************
 * Types
 * ==================================
 * string
 * numbers
 * boolean
 * arrays
 * objects
 * functions
 * undefined / null
 ***********************************************/

var course = "Xccelerate";
course = "New Course";

console.log("Does it change?");
console.log(course);
console.log("Yes!");

var firstName = "Lesley";
var lastName = "Cheung";
// notice the comma here
console.log("Name:", firstName, lastName);

let yes = true;
console.log(yes === true);

// arrays
var dataTypeArray = [
  true,
  "This string",
  343,
  null,
  undefined,
  ["Red", "Yellow", "Blue"],
  { name: "Sam", experience: 4 },
];
console.log(dataTypeArray[1]); // Output: This string

// objects
var emptyObject = {};
var person = { name: "Clark", surname: "Kent" };

var car = {
  modal: "BMW X3",
  colour: "white",
  doors: 5,
};

/**********************************************
 * typeof
 * ==================================
 * You can also type in typeof to differentiate the kind of
 * data (this can be helpful when you are retrieving data
 * from online and such)
 ***********************************************/
var age = 30;
console.log("Age is: ", typeof age);

var courseName = "JavaScript 4 Beginners";
console.log("Name is: ", typeof courseName);

var isCat = true;
console.log("isCat is: ", typeof isCat);

var cars = Array("VW", "Lambo", "Audi");

console.log("Cars is: ", typeof cars);
var colours = ["Red", "Yellow", "Blue", "Black"];
console.log(colours[0]); // Output: Red
