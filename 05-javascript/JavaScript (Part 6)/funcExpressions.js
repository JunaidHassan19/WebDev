// =====================================================
// FUNCTION EXPRESSIONS BASICS IN JAVASCRIPT
// =====================================================

// A function expression is when you assign a function to a variable.
// This is different from a function declaration.
// Function expressions are not hoisted like declarations are.


// =====================================================
// 1. BASIC FUNCTION EXPRESSION SYNTAX
// =====================================================

// Syntax: var/let/const variableName = function(parameters) {
//     // function body
// };

// Simple function expression
const add = function(a, b) {
    return a + b;
};

console.log(add(5, 3));  // Output: 8

// Another example
const greet = function(name) {
    return "Hello, " + name;
};

console.log(greet("Alice"));  // Output: Hello, Alice

// Function expression assigned to a variable
const multiply = function(x, y) {
    return x * y;
};

console.log(multiply(4, 5));  // Output: 20


// =====================================================
// 2. ANONYMOUS VS NAMED FUNCTION EXPRESSIONS
// =====================================================

// ANONYMOUS FUNCTION EXPRESSION
// The function has no name, only the variable has a name
const square = function(num) {
    return num * num;
};

console.log(square(5));  // Output: 25

// NAMED FUNCTION EXPRESSION
// The function also has a name (but is still assigned to a variable)
const factorial = function fact(n) {
    if (n <= 1) {
        return 1;
    }
    return n * fact(n - 1);  // Can use the name 'fact' inside the function
};

console.log(factorial(5));  // Output: 120

// The function name can be used inside the function but not outside
// console.log(fact(5));  // Error: fact is not defined (outside the function)


// =====================================================
// 3. STORING FUNCTIONS IN VARIABLES
// =====================================================

// Functions are first-class objects in JavaScript
// You can store them in variables just like any other value

const isEven = function(num) {
    return num % 2 === 0;
};

const isOdd = function(num) {
    return num % 2 !== 0;
};

console.log(isEven(4));   // Output: true
console.log(isOdd(4));    // Output: false
console.log(isOdd(7));    // Output: true


// =====================================================
// 4. PASSING FUNCTION EXPRESSIONS AS ARGUMENTS
// =====================================================

// You can pass function expressions as arguments to other functions
// These are called CALLBACKS

function executeFunction(func, value) {
    return func(value);
}

const double = function(num) {
    return num * 2;
};

console.log(executeFunction(double, 5));  // Output: 10

// Or pass the function expression directly
console.log(executeFunction(function(x) {
    return x * x;
}, 5));  // Output: 25


// EXAMPLE: Array methods with function expressions
const numbers = [1, 2, 3, 4, 5];

// Using function expression as callback for map
const doubled = numbers.map(function(num) {
    return num * 2;
});

console.log(doubled);  // Output: [2, 4, 6, 8, 10]

// Using function expression as callback for filter
const evens = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log(evens);  // Output: [2, 4]


// =====================================================
// 5. RETURNING FUNCTION EXPRESSIONS
// =====================================================

// Functions can return function expressions
// This creates closures

function createMultiplier(multiplier) {
    return function(num) {
        return num * multiplier;
    };
}

const multiplyBy3 = createMultiplier(3);
const multiplyBy5 = createMultiplier(5);

console.log(multiplyBy3(10));  // Output: 30
console.log(multiplyBy5(10));  // Output: 50


// Another example: creating a greeting function
function createGreeter(greeting) {
    return function(name) {
        return greeting + ", " + name + "!";
    };
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");

console.log(sayHello("John"));  // Output: Hello, John!
console.log(sayHi("Jane"));     // Output: Hi, Jane!


// =====================================================
// 6. VAR, LET, AND CONST WITH FUNCTION EXPRESSIONS
// =====================================================

// Using var (function-scoped)
var funcVar = function() {
    return "Using var";
};

// Using let (block-scoped) - Preferred
let funcLet = function() {
    return "Using let";
};

// Using const (block-scoped, cannot be reassigned) - Most preferred
const funcConst = function() {
    return "Using const";
};

console.log(funcVar());     // Output: Using var
console.log(funcLet());     // Output: Using let
console.log(funcConst());   // Output: Using const

// Note: Usually use 'const' for function expressions
// because you typically don't need to reassign the function


// =====================================================
// 7. HOISTING DIFFERENCES
// =====================================================

// Function DECLARATIONS are hoisted
// You can call them before they are defined
result1();  // Works! Output: Declaration hoisted

function result1() {
    console.log("Declaration hoisted");
}

// Function EXPRESSIONS are NOT hoisted
// You CANNOT call them before they are defined
// result2();  // Error: result2 is not a function

const result2 = function() {
    console.log("Expression not hoisted");
};

result2();  // Works! Only now, after definition


// =====================================================
// 8. IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
// =====================================================

// An IIFE is a function expression that is called immediately
// after it is defined

// Syntax: (function() { ... })();

// Basic IIFE
(function() {
    console.log("This function runs immediately!");
})();

// IIFE with parameters
(function(name) {
    console.log("Hello, " + name);
})("World");  // Output: Hello, World

// IIFE that returns a value
const result = (function() {
    const x = 10;
    const y = 20;
    return x + y;
})();

console.log(result);  // Output: 30

// IIFE with arrow function syntax
(() => {
    console.log("Arrow function IIFE");
})();


// =====================================================
// 9. ARROW FUNCTIONS (Modern Function Expression Syntax)
// =====================================================

// Arrow functions are a concise way to write function expressions
// Syntax: const name = (params) => { body };

// Basic arrow function
const greetArrow = (name) => {
    return "Hello, " + name;
};

console.log(greetArrow("Bob"));  // Output: Hello, Bob

// Arrow function with single parameter (parentheses optional)
const square2 = num => {
    return num * num;
};

console.log(square2(5));  // Output: 25

// Arrow function with single expression (can omit braces and return)
const cube = num => num * num * num;

console.log(cube(3));  // Output: 27

// Arrow function with multiple parameters
const sum = (a, b, c) => a + b + c;

console.log(sum(2, 3, 4));  // Output: 9

// Arrow function with no parameters
const randomNumber = () => {
    return Math.random();
};

console.log(randomNumber());

// Arrow functions are commonly used with array methods
const nums = [1, 2, 3, 4, 5];

const squared = nums.map(n => n * n);
console.log(squared);  // Output: [1, 4, 9, 16, 25]

const filtered = nums.filter(n => n > 2);
console.log(filtered);  // Output: [3, 4, 5]


// =====================================================
// 10. STORING FUNCTIONS IN OBJECTS
// =====================================================

// You can store function expressions in object properties
// These are called METHODS

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
};

console.log(calculator.add(10, 5));       // Output: 15
console.log(calculator.subtract(10, 5));  // Output: 5
console.log(calculator.multiply(10, 5));  // Output: 50
console.log(calculator.divide(10, 5));    // Output: 2

// Using arrow functions in objects (modern syntax)
const calculator2 = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b
};

console.log(calculator2.add(20, 5));  // Output: 25


// =====================================================
// 11. CONDITIONAL FUNCTION EXPRESSIONS
// =====================================================

// You can assign different functions based on conditions

let myFunc;

if (Math.random() > 0.5) {
    myFunc = function() {
        return "Random function 1";
    };
} else {
    myFunc = function() {
        return "Random function 2";
    };
}

console.log(myFunc());


// =====================================================
// 12. FUNCTION EXPRESSIONS VS FUNCTION DECLARATIONS
// =====================================================

/*
COMPARISON TABLE:

                        Declaration              Expression
-------------------    ----------------------   ----------------------
Syntax                  function name() {}       const name = function() {}

Hoisting                Fully hoisted            Not hoisted

Can call before         Yes                      No
definition?

Must have name?         Yes                      No (can be anonymous)

Can reassign?           No                       Yes (if using let/var)

Typical use             Regular functions        Callbacks, arrow functions,
                                                 storing in variables


WHEN TO USE EACH:

Use DECLARATIONS for:
- Main program functions
- Functions you need before definition (hoisting)
- When you want explicit function definitions

Use EXPRESSIONS for:
- Callbacks to other functions
- Storing functions in variables
- Functions passed as arguments
- Arrow functions (ES6+)
- IIFE (Immediately Invoked)

*/


// =====================================================
// 13. PRACTICAL EXAMPLES
// =====================================================

// Example 1: Function that returns a different operation based on input
function getOperation(operation) {
    if (operation === 'add') {
        return function(a, b) {
            return a + b;
        };
    } else if (operation === 'multiply') {
        return function(a, b) {
            return a * b;
        };
    }
}

const addFunc = getOperation('add');
const multiplyFunc = getOperation('multiply');

console.log(addFunc(5, 3));      // Output: 8
console.log(multiplyFunc(5, 3)); // Output: 15


// Example 2: Event handler function expressions (common in web dev)
// const button = document.getElementById('myButton');
// button.addEventListener('click', function() {
//     console.log('Button was clicked!');
// });


// Example 3: Timer with function expression
setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);

// Or with arrow function
setTimeout(() => {
    console.log("This also runs after 3 seconds");
}, 3000);


// Example 4: Data validation with function expressions
const validators = {
    isEmail: function(email) {
        return email.includes('@');
    },
    isPhoneNumber: function(phone) {
        return phone.length === 10;
    },
    isPassword: function(pass) {
        return pass.length >= 8;
    }
};

console.log(validators.isEmail("user@example.com"));  // Output: true
console.log(validators.isPhoneNumber("1234567890"));   // Output: true
console.log(validators.isPassword("pass123"));         // Output: false


// =====================================================
// KEY POINTS TO REMEMBER
// =====================================================

/*
1. Function expressions assign a function to a variable
2. They are not hoisted (cannot be used before definition)
3. Can be anonymous (no name) or named
4. Commonly used as callbacks
5. Arrow functions are a concise syntax for function expressions
6. IIFE (Immediately Invoked Function Expression) runs right away
7. Can be stored in object properties (methods)
8. Can be passed as arguments to other functions
9. Can be returned from other functions (closures)
10. Use 'const' by default when defining function expressions
11. Function expressions enable functional programming patterns
12. They are more flexible than function declarations for many use cases
*/

console.log("\n=== Function Expressions Basics Complete ===\n");
