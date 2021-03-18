/**********************************************
 * var, let and const
 * ==================================
 ***********************************************/
// This is a global var
var course = "Prep";

/**********************************************
 * Can access vars in code blocks
 * ==================================
 ***********************************************/
let okay = true;
if (okay) {
  var wontCry = true;
}
console.log(wontCry);

/**********************************************
 * Cannot access var in functions
 * ==================================
 ***********************************************/
function okay(parameter) {
  var access = false;
  let access2 = false;
}
console.log(access);
console.log(access2);

/**********************************************
 * Array
 * ==================================
 ***********************************************/

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
const colors = [
  "black",
  "blue",
  "green",
  "yellow",
  "white",
];
iterateArray(colors);
