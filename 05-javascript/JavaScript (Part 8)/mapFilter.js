// map(): Creates a new array with the results of calling a provided function on every element in the calling array.

let numbers = [1, 2, 3, 4, 5];

// Using map to create a new array with each number squared
let squaredNumbers = numbers.map(function (num) {
  return num * num;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// Using map with an arrow function
let doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

let arr = [
  {
    name: "Junni",
    marks: 94,
    age: 25,
  },
  {
    name: "Alice",
    marks: 88,
    age: 30,
  },
  {
    name: "Bob",
    marks: 76,
    age: 35,
  },
  {
    name: "Charlie",
    marks: 92,
    age: 40,
  },
];

let cgpa = arr.map((el) => {
  return el.marks / 10;
});

console.log(cgpa); // Output: [9.4, 8.8, 7.6, 9.2]

// filter(): Creates a new array with all elements that pass the test implemented by the provided function.

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Using filter to create a new array with only even numbers
// let evenNumbers = nums.filter((el) => {
//   return el % 2 === 0;
// });

// console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

// // Using filter to create a new array with numbers greater than 5
// let greaterThanFive = nums.filter((el) => el > 5);
// console.log(greaterThanFive); // Output: [6, 7, 8, 9, 10]
