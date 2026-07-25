/*
Default Parameters: Gives a default value to a parameter if no value or undefined is passed in.


syntax:
function functionName(parameter1 = defaultValue1, parameter2 = defaultValue2) {
  // function body
}

*/

function sum(a, b = 5) {
  return a + b;
}

console.log(sum(5));

function sum1(a = 2, b) {
  return a + b;
}

coansole.log(sum1(5)); // NaN because b is undefined