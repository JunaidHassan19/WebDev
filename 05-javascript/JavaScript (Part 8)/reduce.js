// reduce(): resuces the array to a single value by executing a reducer function on each element of the array.

let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function (accumulator, current) {
  return accumulator + current;
});
console.log(sum); // Output: 15

// sum of ages in an array of objects
let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

let totalAge = people.reduce(function (accumulator, current) {
  return accumulator + current.age;
}, 0); // 0 is the initial value for the accumulator

console.log(totalAge); // Output: 90
