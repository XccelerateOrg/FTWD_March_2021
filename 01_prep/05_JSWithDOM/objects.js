// Variable
var name = "Lesley";

// Function
function something() {}

var cat = {
  name: "Kitty", // Property
  sound: function () {
    // Method
    console.log("Meow");
  },
  age: 4,
  cats: 1,
};

// Object syntax
var objectName = {
  key: "value",
  key2: "value2",
};

objectName["key"]; // value
objectName["key2"]; // value2

const computer = "computer";
const person = {
  name: "Kalob",
  speak() {
    console.log("I SAY WOOF");
  },
  // 'computer': 'computer',
  // 'computer': computer,
  computer,
};

console.log(person.computer);
var arr = [
  "Kalob",
  "Nathan",
  "Zephyr",
  "Prairie",
  "Henry",
  "Veto",
  "Maya",
];
// // const kalob = arr[0]
// // const nathan = arr[1]

// let [kalob, nathan, zephyr] = arr
let [kalob, nathan, zephyr, ...everyoneElse] = arr;

const person = {
  name: "DEFINITELY NOT KALOB",
  age: 30,
  cats: 2,
  food: "pizza",
  color: "red",
};

let {
  // key: newVarNameIs
  name,
  food,
  color = "blue",
} = person;
console.log("Name is ", name);
console.log("Favirote food is ", food);
console.log("Fav color ", color);
