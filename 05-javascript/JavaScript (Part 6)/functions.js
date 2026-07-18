// Basic Functions in JavaScript

// A function is a block of code that performs a specific task.
// You can write code once and reuse it whenever needed.

// Function declaration
function greet() {
	console.log("Hello, welcome to JavaScript functions!");
}

greet();

// Function with parameters
function add(a, b) {
	console.log(a + b);
}

add(5, 3);
add(10, 20);

// Function with return value
function multiply(x, y) {
	return x * y;
}

let result = multiply(4, 6);
console.log(result);

// Another example
function isEven(number) {
	if (number % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

console.log(isEven(8));
console.log(isEven(7));

// Important points
// - Functions help avoid repeated code
// - Parameters are input values passed to a function
// - return sends a value back from the function
// - A function must be called to run its code

