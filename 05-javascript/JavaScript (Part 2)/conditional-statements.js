// ============== if statement ================

// if (condition) {
//   // code to execute if condition is true
// }

let age = 20;

if (age >= 18) {
  console.log("Adult");
}

// ============== if-else statement ================

//  if(condition1) {
//   // code to execute if condition1 is true
// } else if (condition2) {
//   // code to execute if condition2 is true
// } 

let age1 = 15;

if (age1 >= 18) {
  console.log("Adult");
} else if (age1 >= 13) {
  console.log("Teenager");
} else if (age1 >= 5) {
  console.log("Child");
}

let marks = 46;
if(marks >= 98) {
  console.log("S")
} else if(marks >=90) {
  console.log("A");
}else if(marks >= 70) {
  console.log("B");
}else if(marks >= 50) {
  console.log("C");
}else if(marks >= 35) {
  console.log("F")
}

// ============== else statement ================

// if(condition) {
//   // code to execute if condition is true
// } else {
//   // code to execute if condition is false
// }

let age2 = 15;

if (age2 >= 18) {
  console.log("Adult");
} else {
  console.log("Not an Adult");
}

let month = "January";
if(month === "January") {
  console.log("Winter");
} else if(month === "July") {
  console.log("Summer");
} else {
  console.log("Other Month");
}
