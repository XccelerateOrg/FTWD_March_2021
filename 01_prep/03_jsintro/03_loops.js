/**********************************************
 * For Loops
 * ==================================
 * String -> Array
 * Loop through array
 * Push email into array
 ***********************************************/
let words = "viola justin kailan harry jh jchoi karl johnny caspar david ray jensen".split(
  " "
);
let emails = [];

for (let i = 0; i < words.length; i++) {
  console.log("Position in array", i);
  let currentEmail =
    words[i].toLowerCase() + "@newEmail.com";
  emails.push(currentEmail);
}
console.log(emails);

/**********************************************
 * While Loops
 * ==================================
 * While the starting number hasn't reached the number
 * Add the starting number to the variable sum
 * Increment the starting number accordingly
 ***********************************************/
let num = 10;
let startingNum = 1;
let sum = 0;
while (startingNum <= num) {
  sum = sum + startingNum;
  startingNum++;
}
console.log(sum);

/**********************************************
 * For Each
 * ==================================
 * Loop through each item in the array here
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 ***********************************************/

let names = ["Bibek", "Sam", "Lesley"];

// forEach(currentValue, index)
names.forEach(function (name, index) {
  console.log(index, name);
});

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
