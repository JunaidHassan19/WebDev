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
