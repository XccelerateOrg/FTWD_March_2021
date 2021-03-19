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

/**********************************************
 * Iterate through this array and console.log everyone
 * ==================================
 ***********************************************/
for (let i = 0; i < marchClass.length; i++) {
  console.log(marchClass[i]);
}
/**********************************************
 * Remove Sam from the array
 * ==================================
 ***********************************************/
let index = marchClass.indexOf("Sam");
marchClass.splice(index, 1);
console.log(marchClass);

/**********************************************
 * Add Alex to the front of the array
 * ==================================
 ***********************************************/
marchClass.unshift("Alex");
console.log(marchClass);

/**********************************************
 * Add Lavine to the end of the array
 * ==================================
 ***********************************************/
marchClass.push("Lavine");
console.log(marchClass);
/**********************************************
 * What is the index of Ray?
 * ==================================
 ***********************************************/
console.log(marchClass.indexOf("Ray"));
/**********************************************
 * What is the index of Bob? (Should return -1)
 * ==================================
 ***********************************************/
console.log(marchClass.indexOf("Bob"));

/**********************************************
 * Filter for names that have the letter A
 * ==================================
 ***********************************************/
// CODE HERE
let namesWithA = marchClass.filter((x) => x.includes("a"));
console.log(namesWithA);


let marchCohort = {
  students: [
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
  ],
  startDate: new Date(2021, 3, 15),
  endDate: new Date(2021, 7, 26),
};
/**********************************************
 * Add key teachers and value array ["Bibek", "Sam", "Lesley"]
 * ==================================
 ***********************************************/
marchCohort["teachers"] = ["Bibek", "Sam", "Lesley"];
console.log(marchCohort);

/**********************************************
 * Delete start date
 * ==================================
 ***********************************************/
delete marchCohort["startDate"];
console.log(marchCohort);

/**********************************************
 * Get the length of the students array
 * ==================================
 ***********************************************/
let length = marchCohort.students.length;
console.log(length);

/**********************************************
 * Get all the keys
 * ==================================
 ***********************************************/
let keys = Object.keys(marchCohort);
console.log(keys);

/**********************************************
 * Get all the values
 * ==================================
 ***********************************************/
let values = Object.values(marchCohort);
console.log(values);
