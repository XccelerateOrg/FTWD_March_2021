const remove = document.querySelector("#remove");
remove.parentNode.removeChild(remove);

/**********************************************
 * Remove Tag
 * ==================================
 ***********************************************/
// let removeElement = document.getElementById("remove");
// removeElement.remove();

/**********************************************
 * Make all list tags blue
 * ==================================
 ***********************************************/
const blueTags = document.querySelectorAll("li");
blueTags.forEach((eachElement) => {
  console.log(eachElement);
  eachElement.style.color = "blue";
});

/**********************************************
 * Change Inner Text Content
 * ==================================
 ***********************************************/
let pTags = document.querySelector("p");
pTags.innerHTML = "yo whats up?";

/**********************************************
 * Input this array into your document
 * ==================================
 * - Create a for loop
 * - Create a new element
 * - Assign the innerHTML to the item in the for loop
 * - Append the new element to the body
 ***********************************************/
let marchClass = [
  "Caspar",
  "David",
  "Harry",
  "JC",
  "Jensen",
  "JH",
  "Johnny",
  "Justin",
  "Kailan",
  "Karl",
  "Ray",
  "Viola",
  "Bibek",
  "Sam",
  "Lesley",
];

for (let i = 0; i < marchClass.length; i++) {
  let newElement = document.createElement("li");
  newElement.innerHTML = marchClass[i];
  document.body.appendChild(newElement);
}
