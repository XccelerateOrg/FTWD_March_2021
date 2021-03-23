for (let i = 0; i < 13; i++) {
  var chill = false;
  let notChill = false;
}
// console.log(notChill);
console.log(chill);

let trueOrFalse = false;
let amIReal = null;
let whatsGoingOn = undefined;
let dayToday = 24;
let myFavColor = "lightBlue";
let symbol = "hongKongFlower";

console.log(typeof trueOrFalse);
console.log(typeof amIReal);
console.log(typeof whatsGoingOn);
console.log(typeof dayToday);
console.log(typeof myFavColor);
console.log(typeof symbol);

let objectOne = {
  key: "house",
  practice: "confidence",
  chill: "relaxed",
};
let array = ["whats", "up", "homies"];

function getGood(practice, debugging) {
  if (practice === true && debugging === true) {
    return true;
  }
  return false;
}

let practiced = false;
let debugged = false;

console.log(getGood(practiced, debugged));

function improve(writeCode, readCode) {
  if (writeCode === true || readCode === true) {
    return true;
  }
  return false;
}

let wroteCode = true;
let readCode = false;
console.log(improve(wroteCode, readCode));

let seven = "7"; // string
let noSeven = 7; // number
console.log(seven === noSeven);
console.log(seven == noSeven);
