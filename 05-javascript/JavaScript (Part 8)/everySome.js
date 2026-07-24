// every(): Checks if all elements in an array pass a test / logical AND operator

let numbers = [2, 4, 6, 8, 10];
// Check if all numbers are even
let allEven = numbers.every(function (num) {
  return num % 2 === 0;
});

console.log(allEven); // Output: true

//some(): Checks if at least one element in an array passes a test / logical OR operator

let numbers2 = [1, 3, 5, 7, 8];
// Check if at least one number is even
let hasEven = numbers2.some(function (num) {
  return num % 2 === 0;
});
