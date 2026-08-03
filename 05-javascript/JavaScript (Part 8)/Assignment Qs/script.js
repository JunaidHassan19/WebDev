// Qs 1. Square and sum the array elements using the arrow function and then find the average of the array.

let nums = [1, 2, 3, 4, 5];

const square = nums.map((nums) => nums * nums);
console.log("Squared Array:", square);

let sum = square.reduce((acc, curr) => acc + curr);
let average = sum / square.length;
console.log("Average of Squared Array:", average);

// Qs 2. Create a new array using the map function whose each element is equal to the original element plus 5.
let arr = [1, 2, 3, 4, 5];
const newArr = arr.map((num) => num + 5);
console.log("New Array with each element plus 5:", newArr);

//Qs 3. Create a new array whose elements are in uppercase of words present in the original array.
let words = ["hello", "world", "javascript", "programming"];
const upperCaseWords = words.map((word) => word.toUpperCase());
console.log("Uppercase Words Array:", upperCaseWords);
