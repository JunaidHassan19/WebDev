// Qs 1. Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.

const arrayAverage = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
};

let arr = [1, 2, 3, 4, 5];
console.log(arrayAverage(arr)); // Output: 3
