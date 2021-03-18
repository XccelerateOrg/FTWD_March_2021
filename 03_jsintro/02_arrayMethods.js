/**********************************************
 * Arrays
 * ==================================
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 ***********************************************/

let favFoods = [
  "Fish and chips",
  "Sausages and mash",
  "Spaghetti bolognese",
  "Avocado and quinoa salad",
];

favFoods.push("Pizza");
console.log(favFoods);
favFoods.pop();
console.log(favFoods);
favFoods.unshift("Risotto");
console.log(favFoods);
favFoods.shift();
console.log(favFoods);

console.log(favFoods.indexOf("Sausages and mash"));
console.log(favFoods.lastIndexOf("Spaghetti bolognese"));
console.log(favFoods.includes("Avocado and quinoa salad"));
console.log(favFoods[2]);
// Output: Spaghetti bolognese

// Filter, map and reduce
console.log(
  favFoods.filter((element) => element.includes("and"))
);
console.log(favFoods.map((element) => element.concat("!")));

let inOneString = favFoods.reduce(function (
  total,
  current
) {
  return total.concat(", " + current);
});
console.log(inOneString);

// Destructuring the array
// This will be useful when you get a bunch of data and you want to assign specific variable names to the items in the array
let [first, second] = favFoods;
console.log(first);
console.log(second);
