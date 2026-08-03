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

//Qs 4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.

function doubleAndReturnArgs(arr, ...args) {
  const doubledArgs = args.map((arg) => arg * 2);
  return [...arr, ...doubledArgs];
}

console.log(doubleAndReturnArgs([1, 2, 3], 4, 5)); // Output: [1, 2, 3, 8, 10]
