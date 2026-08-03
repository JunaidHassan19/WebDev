// Qs 1. Square and sum the array elements using the arrow function and then find the average of the array.

let nums = [1, 2, 3, 4, 5];

const square = nums.map((nums) => nums * nums);
console.log("Squared Array:", square);

let sum = square.reduce((acc, curr) => acc + curr);
let average = sum / square.length;
console.log("Average of Squared Array:", average);
