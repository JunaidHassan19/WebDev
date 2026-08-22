/*
JS Call Stack: in this example, we will see how the call stack works in JavaScript. The call stack is a mechanism for an interpreter (like the JavaScript engine) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function.
*/

function test() {
  console.log("Inside test function");
}

function demo() {
  console.log("Inside demo function and calling test function");
  test();
}

console.log("Calling demo function");
demo();
console.log("Back in the global context after demo function call");

function one() {
  console.log("Inside one function");
  return 1;
}

function two() {
  console.log("Inside two function and calling one function twice");
  return one() + one();
}

function three() {
  console.log("Inside three function");
  let ans = two() + one();
  console.log(ans);
}

console.log("Calling three function");
three();
