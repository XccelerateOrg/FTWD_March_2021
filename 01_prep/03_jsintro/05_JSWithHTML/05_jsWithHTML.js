/**********************************************
 * Grabbing Elements and Manipulating Them
 * ==================================
 ***********************************************/

const val1 = document.querySelectorAll("li");
console.log(val1);

// Adding to list elements
for (let i = 0; i < val1.length; i++) {
  val1[i].textContent = `${i + 1} ListItem(${i})`;
}
// Grab all elements with class highlight
const val2 = document.querySelectorAll(".highlight");
console.log(val2);
// Replace the text content with class highlight with updated
for (let x = 0; x < val2.length; x++) {
  console.log(val2[x]);
  val2[x].textContent = `UPDATED ${x}`;
}

/**********************************************
 * Changing Styles
 * ==================================
 ***********************************************/
const message = document.querySelector("#message");
console.log(message);
message.style.textAlign = "center";
message.style.color = "red";
message.style.backgroundColor = "black";
message.style.fontSize = "2em";
message.style.borderBottom = "5px dotted purple";
const highlights = document.querySelectorAll(
  ".addHighlight"
);
console.log(highlights);
highlights.forEach((el) => {
  console.log(el);
  el.style.backgroundColor = "#ffff00";
  el.style.fontWeight = "bold";
});