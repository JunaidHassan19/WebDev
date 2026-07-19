// =====================================================
// HIGHER ORDER FUNCTIONS (RETURNING FUNCTIONS) - BASICS
// =====================================================

// WHAT IS A HIGHER ORDER FUNCTION?
// 
// A higher order function is a function that:
// 1. Takes a function as an argument, OR
// 2. Returns a function as a result
//
// In this file, we focus on functions that RETURN functions.
//
// This is a powerful concept in JavaScript that enables
// functional programming patterns like closures, currying,
// and composition.


// =====================================================
// 1. SIMPLEST EXAMPLE - FUNCTION RETURNING A FUNCTION
// =====================================================

// A basic higher order function that returns another function

function sayHello() {
    return function() {
        console.log("Hello!");
    };
}

// Call the outer function to get the inner function
const greeting = sayHello();

// Now call the returned function
greeting();  // Output: Hello!


// =====================================================
// 2. RETURNING A FUNCTION WITH PARAMETERS
// =====================================================

// A function that returns a function with parameters

function createAdder(x) {
    return function(y) {
        return x + y;
    };
}

// Create an adder function that adds 5
const addFive = createAdder(5);

// Use it to add 5 to any number
console.log(addFive(3));   // Output: 8  (5 + 3)
console.log(addFive(10));  // Output: 15 (5 + 10)
console.log(addFive(2));   // Output: 7  (5 + 2)

// You can also create another adder for a different number
const addTen = createAdder(10);
console.log(addTen(5));    // Output: 15 (10 + 5)


// =====================================================
// 3. MULTIPLIER FUNCTION - PRACTICAL EXAMPLE
// =====================================================

// A higher order function that creates multiplier functions

function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

// Create different multiplier functions
const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(double(5));     // Output: 10 (5 * 2)
console.log(triple(5));     // Output: 15 (5 * 3)
console.log(quadruple(5));  // Output: 20 (5 * 4)

// You can use them multiple times
console.log(double(8));     // Output: 16
console.log(triple(8));     // Output: 24


// =====================================================
// 4. GREETER FUNCTION - TEXT-BASED EXAMPLE
// =====================================================

// A function that returns a customized greeting function

function createGreeter(greeting) {
    return function(name) {
        return greeting + ", " + name + "!";
    };
}

// Create different greeting functions
const sayGoodMorning = createGreeter("Good morning");
const sayGoodEvening = createGreeter("Good evening");
const sayWelcome = createGreeter("Welcome");

console.log(sayGoodMorning("Alice"));   // Output: Good morning, Alice!
console.log(sayGoodEvening("Bob"));     // Output: Good evening, Bob!
console.log(sayWelcome("Charlie"));     // Output: Welcome, Charlie!

// You can call them as many times as you want
console.log(sayGoodMorning("Diana"));   // Output: Good morning, Diana!
console.log(sayWelcome("Eve"));         // Output: Welcome, Eve!


// =====================================================
// 5. POWER FUNCTION - MATHEMATICAL EXAMPLE
// =====================================================

// A function that returns a function for power calculations

function createPowerFunction(power) {
    return function(number) {
        return Math.pow(number, power);
    };
}

// Create functions for different powers
const square = createPowerFunction(2);    // x^2
const cube = createPowerFunction(3);      // x^3
const toFourth = createPowerFunction(4);  // x^4

console.log(square(3));    // Output: 9    (3^2)
console.log(cube(3));      // Output: 27   (3^3)
console.log(toFourth(2));  // Output: 16   (2^4)


// =====================================================
// 6. DISCOUNT CALCULATOR - E-COMMERCE EXAMPLE
// =====================================================

// A function that returns a discount calculator

function createDiscountCalculator(discountPercent) {
    return function(originalPrice) {
        const discountAmount = originalPrice * (discountPercent / 100);
        const finalPrice = originalPrice - discountAmount;
        return finalPrice;
    };
}

// Create discount functions
const applyTenPercentDiscount = createDiscountCalculator(10);
const applyTwentyPercentDiscount = createDiscountCalculator(20);
const applyFiftyPercentDiscount = createDiscountCalculator(50);

console.log(applyTenPercentDiscount(100));    // Output: 90
console.log(applyTwentyPercentDiscount(100)); // Output: 80
console.log(applyFiftyPercentDiscount(100));  // Output: 50


// =====================================================
// 7. TEXT FORMATTER - STRING MANIPULATION EXAMPLE
// =====================================================

// A function that returns a text formatter function

function createTextFormatter(style) {
    if (style === 'uppercase') {
        return function(text) {
            return text.toUpperCase();
        };
    } else if (style === 'lowercase') {
        return function(text) {
            return text.toLowerCase();
        };
    } else if (style === 'capitalize') {
        return function(text) {
            return text.charAt(0).toUpperCase() + text.slice(1);
        };
    }
}

// Create different formatter functions
const toUpperCase = createTextFormatter('uppercase');
const toLowerCase = createTextFormatter('lowercase');
const capitalize = createTextFormatter('capitalize');

console.log(toUpperCase("hello"));    // Output: HELLO
console.log(toLowerCase("HELLO"));    // Output: hello
console.log(capitalize("hello"));     // Output: Hello


// =====================================================
// 8. REPEATER FUNCTION - REPETITION EXAMPLE
// =====================================================

// A function that returns a function that repeats an action

function createRepeater(action, times) {
    return function() {
        for (let i = 0; i < times; i++) {
            action();
        }
    };
}

// Helper function to print something
function printHello() {
    console.log("Hello");
}

// Create repeater functions
const sayHelloThreeTimes = createRepeater(printHello, 3);
const sayHelloFiveTimes = createRepeater(printHello, 5);

console.log("Repeating 3 times:");
sayHelloThreeTimes();
// Output:
// Hello
// Hello
// Hello

console.log("\nRepeating 5 times:");
sayHelloFiveTimes();
// Output:
// Hello
// Hello
// Hello
// Hello
// Hello


// =====================================================
// 9. ACCUMULATOR FUNCTION - DATA COLLECTION EXAMPLE
// =====================================================

// A function that returns an accumulator function

function createAccumulator(initialValue) {
    let sum = initialValue;
    
    return function(numberToAdd) {
        sum = sum + numberToAdd;
        return sum;
    };
}

// Create accumulators starting from different values
const counter1 = createAccumulator(0);
const counter2 = createAccumulator(100);

console.log(counter1(5));   // Output: 5
console.log(counter1(3));   // Output: 8
console.log(counter1(2));   // Output: 10

console.log(counter2(10));  // Output: 110
console.log(counter2(20));  // Output: 130


// =====================================================
// 10. OPERATION FACTORY - DYNAMIC OPERATIONS
// =====================================================

// A function that returns a function for different operations

function createOperation(operator) {
    if (operator === '+') {
        return function(a, b) {
            return a + b;
        };
    } else if (operator === '-') {
        return function(a, b) {
            return a - b;
        };
    } else if (operator === '*') {
        return function(a, b) {
            return a * b;
        };
    } else if (operator === '/') {
        return function(a, b) {
            return a / b;
        };
    }
}

// Create operation functions
const add = createOperation('+');
const subtract = createOperation('-');
const multiply = createOperation('*');
const divide = createOperation('/');

console.log(add(10, 5));      // Output: 15
console.log(subtract(10, 5)); // Output: 5
console.log(multiply(10, 5)); // Output: 50
console.log(divide(10, 5));   // Output: 2


// =====================================================
// 11. USING ARROW FUNCTIONS (MODERN SYNTAX)
// =====================================================

// You can also write higher order functions using arrow functions
// This is more concise and modern

// Simple multiplier with arrow functions
const makeMultiplier = (num) => (x) => num * x;

const times2 = makeMultiplier(2);
const times5 = makeMultiplier(5);

console.log(times2(10));  // Output: 20
console.log(times5(10));  // Output: 50

// Adder with arrow functions
const makeAdder = (x) => (y) => x + y;

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(3));   // Output: 8
console.log(add10(3));  // Output: 13


// =====================================================
// 12. COMBINING MULTIPLE RETURNS - CHAINING
// =====================================================

// You can have functions return functions that themselves return functions

function level1(a) {
    return function level2(b) {
        return function level3(c) {
            return a + b + c;
        };
    };
}

// Three ways to use it:

// Way 1: Call all at once
console.log(level1(1)(2)(3));  // Output: 6

// Way 2: Store intermediate results
const step1 = level1(10);
const step2 = step1(20);
const result = step2(30);
console.log(result);  // Output: 60

// Way 3: Create partial functions
const addTwenty = level1(20);
const addTwentySeventy = addTwenty(70);
console.log(addTwentySeventy(10));  // Output: 100


// =====================================================
// WHY USE HIGHER ORDER FUNCTIONS?
// =====================================================

/*
1. CODE REUSE
   - Create a function generator that makes similar functions
   - Instead of writing 10 adders, create one function that makes them

2. CUSTOMIZATION
   - Customize functions based on parameters
   - Each returned function remembers its custom settings

3. CLOSURES
   - The returned function remembers variables from its parent
   - This allows for powerful programming patterns

4. FLEXIBLE CODE
   - Make your code adaptable
   - Configure behavior without changing function logic

5. FUNCTIONAL PROGRAMMING
   - Use higher order functions for data transformation
   - Compose functions together for complex operations

6. LESS REPETITION
   - Write less code by generating functions
   - More DRY (Don't Repeat Yourself)
*/


// =====================================================
// KEY POINTS TO REMEMBER
// =====================================================

/*
1. A higher order function returns a function
2. The returned function can use variables from the outer function (closure)
3. Each returned function can have different behavior based on parameters
4. This enables creating specialized functions from a single template
5. Arrow functions make the syntax more concise
6. The returned function "remembers" values from when it was created
7. Common use cases:
   - Creating specialized functions (multipliers, adders, formatters)
   - Configuration and customization
   - Callbacks and event handlers
   - Data transformation
8. This is a fundamental concept in functional programming
9. Very useful for creating reusable, flexible code
10. Makes code more modular and maintainable
*/

console.log("\n=== Higher Order Functions (Return) Complete ===\n");
