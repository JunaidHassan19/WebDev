// Destructuring: JavaScript provides a convenient way to extract values from arrays or properties from objects and assign them to variables using a syntax called destructuring.

let heros = [
  "Iron Man",
  "Captain America",
  "Thor",
  "Hulk",
  "Black Widow",
  "Hawkeye",
];

// Without destructuring, we would have to access each element of the array using its index and assign it to a variable.
// let firstHero = heros[0];
// let secondHero = heros[1];
// let thirdHero = heros[2];

// With destructuring, we can extract the values from the array and assign them to variables in a single line of code.
let [firstHero, secondHero, thirdHero, ...rest] = heros;

console.log(firstHero); // Output: Iron Man
console.log(secondHero); // Output: Captain America
console.log(thirdHero); // Output: Thor
console.log(rest); // Output: [ 'Hulk', 'Black Widow', 'Hawkeye' ]
