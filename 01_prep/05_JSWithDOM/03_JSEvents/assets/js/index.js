/**********************************************
 * Alert
 * ==================================
 ***********************************************/
function getAlert() {
  console.log("hey");
  alert("yo!");
}
document
  .getElementById("alertBtn")
  .addEventListener("click", getAlert);

/**********************************************
 * Prompt
 * ==================================
 ***********************************************/

let title = document.getElementById("title");
let answer = prompt("What's your favorite color?");
title.style.color = answer;
