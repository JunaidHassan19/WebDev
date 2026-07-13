// Qs 1. Write a JavaScript program to get the first n elements of an array.[n can be any positive number]. 
// For example: for array [7,  9, 0, -2] and n = 3 
// Print,[7, 9, 0]

let arr1 = [7,  9, 0, -2];
let n = 3;

let ans = arr1.slice(0, n);
console.log(ans);


// Qs 2. Write a JavaScript program to get the last n elements of an array. [n can be any   positive number]. 
// For example: for array [7, 9, 0, -2] and n=3 
// Print,[ 9, 0, -2]

let arr2 = [7, 9, 0, -2];
let m = 3;

let ans2 = arr2.slice(arr2.length-m);
console.log(ans2);


// Qs 3. Write a JavaScript program to check whether a string is blank or not.

let str = prompt("Enter a String: ");

if(str.length === 0) {
  console.log("String is Blank");
} else{
  console.log("String is Not Blank");
}