// This is a global var
var course = "Prep";

// local variable
let okay = true;
if (okay) {
  var wontCry = true;
}
console.log(wontCry);
// This is a global function
function doSomething() {
  // This is a LOCAL variable
  // This is only accessible in its local ecosystem
  var teacher = "Lesley";
  // Two console logs
  console.log("!!!", teacher);
  console.log("!!!", course);
}

// Exec. the function
doSomething(course);
console.log("OUT OF SCOPE:", teacher);

function iterateArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }

  for (var j = 0; j < array.length; j++) {
    console.log(array[j]);
  }
  console.log(i); // Output: ReferenceError: i is not defined (stops code from running, comment out)
  console.log(j); // Output: 5
}
const colours = [
  "black",
  "blue",
  "green",
  "yellow",
  "white",
];
iterateArray(colours);
