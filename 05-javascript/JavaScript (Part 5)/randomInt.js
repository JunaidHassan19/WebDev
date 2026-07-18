// Generate a random integer between 1 and 10 (inclusive)
let num = Math.random();
console.log(`Random decimal between 0 and 1: ${num}`);

// Scale the random number to the range of 0 to 10
num = num * 10;
console.log(`Random number between 0 and 10: ${num}`);

// Round down to the nearest integer
num = Math.floor(num);
console.log(`Random integer between 0 and 9: ${num}`);

// Adjust the range to be between 1 and 10
num = num + 1;
console.log(`Random integer between 1 and 10: ${num}`);