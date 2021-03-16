/**********************************************
 * Default Parameters
 * ==================================
 ***********************************************/
// optional arguments (if there is no argument provided, use those as a default)
function greeting(name = "Lesley", age = 26) {
  console.log("Hello " + name);
  console.log("Age is " + age);
  return name + age;
}
var defaultName = greeting();
var sam = greeting("Sam", 29);

/**********************************************
 * Conversion
 * ==================================
 ***********************************************/
function cToF(c_num) {
  return c_num * 1.8 + 32;
}
var zero = cToF(0);
console.log(zero);
var twenty = cToF(20);
console.log(twenty);
var boiling = cToF(100);
console.log(boiling);
var freezing = cToF(-40);
console.log(freezing);

/**********************************************
 * Tip
 * ==================================
 ***********************************************/
function tip(totalAmount, tip = 10, returnTipOnly = false) {
  tip = tip / 100; // 10 -> 0.10
  var tipAmount = totalAmount * tip;
  totalAmount = totalAmount + tipAmount;
  if (returnTipOnly) {
    return tipAmount;
  }
  return totalAmount;
}

var totalBill = tip(25, 10);
console.log(totalBill);

var totalTip = tip(25, 10, true);
console.log(totalTip);

/**********************************************
 * Arrow Functions
 * ==================================
 ***********************************************/

greet = (name, place) => `Hello ${name} from ${place}`;
const hi = greet("Anubhav", "Canada");
console.log(hi);

function greetFunction(name, place) {
  console.log("Hello " + name + " from " + place);
  return "Hello " + name + " from " + place;
}

greetFunction("Anubhav", "Canada");

/**********************************************
 * Pushing things into arrays
 * ==================================
 ***********************************************/
let performingPizza = [];

let unsoldPizza = [];

function bestPizzaWeekly() {
  for (let i = 0; i < dailyLog.length; i++) {
    if (dailyLog[i].busy) {
      dailyLog[i].pizzaMenu.forEach((pizza) => {
        if (performingPizza.includes(pizza)) {
          console.log("Already in list");
        } else {
          performingPizza.push(pizza);
        }
      });
    } else {
      dailyLog[i].pizzaMenu.forEach((pizza) => {
        if (unsoldPizza.includes(pizza)) {
          console.log("Already in list");
        } else {
          unsoldPizza.push(pizza);
        }
      });
    }
  }

  for (let i = 0; i < unsoldPizza.length; i++) {
    performingPizza.forEach((pizza) => {
      if (pizza == unsoldPizza[i]) {
        console.log("this pizza is actually okay");

        unsoldPizza.splice(i, 1);
      }
    });
  }

  return unsoldPizza;
}

console.log(bestPizzaWeekly());
