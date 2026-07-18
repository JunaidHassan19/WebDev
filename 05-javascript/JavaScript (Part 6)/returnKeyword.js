// =====================================================
// RETURN KEYWORD BASICS IN JAVASCRIPT
// =====================================================

// The 'return' keyword is used to send a value back from a function
// to the code that called it. It also terminates the function execution.

// =====================================================
// 1. BASIC RETURN - RETURNING A VALUE
// =====================================================

// Function that adds two numbers and returns the result
function add(a, b) {
    return a + b;
}

console.log(add(5, 3));  // Output: 8

// Function that returns a string
function greet(name) {
    return "Hello, " + name;
}

console.log(greet("Alice"));  // Output: Hello, Alice

// =====================================================
// 2. RETURNING DIFFERENT DATA TYPES
// =====================================================

// Returning a number
function getAge() {
    return 25;
}

// Returning a string
function getName() {
    return "John";
}

// Returning a boolean
function isPositive(num) {
    return num > 0;
}

console.log(isPositive(5));   // Output: true
console.log(isPositive(-3));  // Output: false

// Returning an object
function createUser(name, age) {
    return {
        name: name,
        age: age
    };
}

console.log(createUser("Bob", 30));  // Output: { name: 'Bob', age: 30 }

// Returning an array
function getNumbers() {
    return [1, 2, 3, 4, 5];
}

console.log(getNumbers());  // Output: [1, 2, 3, 4, 5]

// =====================================================
// 3. RETURN WITHOUT A VALUE
// =====================================================

// If a function doesn't explicitly return anything, it returns 'undefined'
function noReturn() {
    console.log("This function does not return");
}

console.log(noReturn());  // Output: undefined

// You can use return without a value to exit the function early
function checkNumber(num) {
    if (num === 0) {
        return;  // Exits the function early, returns undefined
    }
    console.log("Number is: " + num);
}

checkNumber(0);   // No output
checkNumber(5);   // Output: Number is: 5

// =====================================================
// 4. EARLY EXIT / EARLY RETURN
// =====================================================

// Return can be used to exit a function before reaching the end
function findDivisor(numbers, divisor) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % divisor === 0) {
            return numbers[i];  // Returns immediately when found
        }
    }
    return -1;  // Returns -1 if none found
}

console.log(findDivisor([2, 3, 6, 9], 3));  // Output: 3

// =====================================================
// 5. VALIDATION PATTERN - RETURN EARLY
// =====================================================

function processUser(user) {
    // Early returns for validation
    if (!user) {
        return "User is required";
    }
    
    if (!user.name) {
        return "User name is required";
    }
    
    if (user.name.length < 3) {
        return "User name must be at least 3 characters";
    }
    
    // If all validations pass, process the user
    return "User " + user.name + " processed successfully";
}

console.log(processUser(null));  // Output: User is required
console.log(processUser({name: "Jo"}));  // Output: User name must be at least 3 characters
console.log(processUser({name: "John"}));  // Output: User John processed successfully

// =====================================================
// 6. CONDITIONAL RETURNS
// =====================================================

function checkGrade(marks) {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 80) {
        return "B";
    } else if (marks >= 70) {
        return "C";
    } else if (marks >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(checkGrade(85));  // Output: B
console.log(checkGrade(92));  // Output: A

// =====================================================
// 7. RETURNING CALCULATIONS
// =====================================================

function calculateDiscount(price, discountPercent) {
    return price - (price * discountPercent / 100);
}

console.log(calculateDiscount(100, 20));  // Output: 80

// =====================================================
// 8. RETURNING FUNCTION RESULTS
// =====================================================

function multiply(a, b) {
    return a * b;
}

function square(num) {
    return multiply(num, num);  // Returns the result of another function
}

console.log(square(5));  // Output: 25

// =====================================================
// 9. RETURNING NULL FOR NO RESULT
// =====================================================

function findMax(arr) {
    if (arr.length === 0) {
        return null;  // No elements to find max from
    }
    return Math.max(...arr);
}

console.log(findMax([3, 7, 2, 9, 1]));  // Output: 9
console.log(findMax([]));  // Output: null

// =====================================================
// KEY POINTS TO REMEMBER
// =====================================================

/*
1. A 'return' statement sends a value back from a function to the caller
2. Only ONE return statement is executed in a function (unless in different branches)
3. When a return is executed, the function stops running immediately
4. If no return statement is used, the function returns 'undefined'
5. Return can send back any data type: number, string, boolean, object, array, etc.
6. You can use multiple return statements in different conditions
7. Return statements are useful for:
   - Sending calculation results back
   - Validating input and returning early if invalid
   - Finding/searching and returning a result when found
   - Controlling function flow
*/
