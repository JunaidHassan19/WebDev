/*
Rest Parameters:  Allows us to represent an indefinite number of arguments as an array.  It is denoted by three dots (...) followed by the name of the array that will hold the rest of the parameters.  The rest parameter must be the last parameter in the function definition.

syntax:
function functionName(param1, param2, ...restParam) {
  // function body
}

*/

function sum(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    console.log("You have passed ", numbers[i], " as an argument.");
  }
}

console.log(sum(1, 2, 3, 4, 5)); // Output: You have passed 1 as an argument. You have passed 2 as an argument. You have passed 3 as an argument. You have passed 4 as an argument. You have passed 5 as an argument.

function nums(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log("You passed ", args[i], " as an argument.");
  }
}

let numsArray = [1, 2, 3, 4, 5];
console.log(nums(...numsArray)); // Output: You passed 1 as an argument. You passed 2 as an argument. You passed 3 as an argument. You passed 4 as an argument. You passed 5 as an argument.

// arguments object:  An array-like object that contains the values of the arguments passed to a function.  It is not an array, but it has a length property and can be accessed using index notation.
function min(a, b, c, d) {
  console.log(arguments);
  console.log(arguments.length);
  min.push(2); // This will throw an error because min is not an array, it's a function. You cannot push to a function.
}

console.log(min(1, 2, 3, 4)); // Output: [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }

// sum function using rest parameters and reduce method to calculate the sum of all arguments passed to the function.
function sum(...args) {
  return args.reduce((sum, el) => sum + el);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// function to find the minimum value from the arguments passed to the function using rest parameters and reduce method.
function min(...args) {
  return args.reduce((min, el) => (el < min ? el : min)); // This will return the minimum value from the arguments passed to the function.
}

console.log(min(1, 2, 3, 4, 5)); // Output: 1

// function to find the maximum value from the arguments passed to the function using rest parameters and reduce method.
function max(...args) {
  return args.reduce((max, el) => (el > max ? el : max)); // This will return the maximum value from the arguments passed to the function.
}

console.log(max(1, 2, 3, 4, 5)); // Output: 5
