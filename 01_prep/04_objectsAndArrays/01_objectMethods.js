/**********************************************
 * Objects
 * ==================================
 * Key and value pairs can have arrays, functions, strings, etc.
 ***********************************************/
const superman = {
  powers: ["super strength", "laser eyes", "can fly"],
  fname: "Clark",
  lname: "Kent",
  weakness: "Kryptonite",
  greeting: function () {
    const message =
      "My name is " +
      superman.fname +
      " " +
      superman.lname +
      " let me save you";
    return message;
  },
};

// Accessing properties
console.log(superman.powers);
// Output: ['super strength', 'laser eyes', 'can fly']

console.log(`${superman.fname} ${superman.lname}`);
// Output: Clark Kent

superman.greeting();
// Output: My name is Clark Kent let me save you

console.log(fname + " " + lname);
// Output: ReferenceError: fname is not defined
let { fname, lname } = superman; //
console.log(fname + " " + lname); // Output: Clark Kent

console.log(Object.keys(superman)); // Output: [ 'powers', 'fname', 'lname', 'weakness', 'greeting' ]

console.log(Object.values(superman)); // Output: [[ 'super strength', 'laser eyes', 'can fly' ], 'Clark', 'Kent', 'Kryptonite', [Function: greeting] ]
