const sum = (a, b) => a + b;
console.log(sum(5, 3)); // Output: 8

const sum1 = (a, b) => {
  return a + b;
}
console.log(sum1(10, 15)); // Output: 25


let greet = (name) => { 
  return `Hello, ${name}`; 
};
console.log(greet('Junni')); // Output: Hello, Junni

let isEven = (num) => {
  return num % 2 === 0;
};
console.log(isEven(4)); // Output: true
console.log(isEven(5)); // Output: false

/*
Arrow functions are a more concise way to write functions in JavaScript. They are especially useful for short functions and callbacks. However, they do not have their own 'this' context, which can lead to different behavior compared to regular functions.

*/