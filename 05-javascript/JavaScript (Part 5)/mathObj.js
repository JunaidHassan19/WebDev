// Math Object

// The Math object in JavaScript is a built-in object that provides useful
// mathematical constants and functions. It is not a constructor, so we do not
// create it with `new Math()`.

// Common Math properties
console.log(Math.PI); // 3.141592653589793
console.log(Math.E);  // 2.718281828459045

// Rounding methods
console.log(Math.round(4.3)); // 4
console.log(Math.round(4.8)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1));  // 5

// Absolute value and power
console.log(Math.abs(-12));   // 12
console.log(Math.pow(2, 3));  // 8

// Minimum and maximum
console.log(Math.min(3, 8, 1, 9)); // 1
console.log(Math.max(3, 8, 1, 9)); // 9

// Random numbers
console.log(Math.random()); // returns a random decimal between 0 and 1

// Generate a random integer from 1 to 10
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);

// Square root and trigonometry
console.log(Math.sqrt(25)); // 5
console.log(Math.sin(0));   // 0

// Important points
// - Math is a built-in object
// - It helps with rounding, random numbers, powers, roots, and more
// - Most Math methods are used directly like Math.methodName()

