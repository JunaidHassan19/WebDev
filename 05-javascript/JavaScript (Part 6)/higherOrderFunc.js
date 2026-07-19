// Higher-order function example
function multipleGreet(func, count) { // This function takes another function (func) and a count as arguments
  for(let i = 1; i <= count; i++) {
    func();
  }
}


// Example usage of the higher-order function
let greet = function() {// This is a function expression that defines a function to greet
  console.log("Hello!");
}

multipleGreet(greet, 3); // Output: Hello! (printed 3 times)