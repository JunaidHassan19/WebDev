// =====================================================
// METHODS IN JAVASCRIPT - BASICS
// =====================================================

// WHAT IS A METHOD?
//
// A method is a function that belongs to an object.
// In other words, it's a function stored as a property of an object.
// Methods allow you to define actions that an object can perform.
//
// Think of an object as a "thing" and methods as "things it can do"
// Example: A car object can have methods like: start(), stop(), drive()


// =====================================================
// 1. SIMPLEST METHOD - FUNCTION IN AN OBJECT
// =====================================================

// Create an object with a method
const person = {
    name: "John",
    greet: function() {
        console.log("Hello, my name is John!");
    }
};

// Call the method using dot notation
person.greet();  // Output: Hello, my name is John!


// =====================================================
// 2. OBJECT WITH MULTIPLE METHODS
// =====================================================

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

// Call different methods
console.log(calculator.add(10, 5));       // Output: 15
console.log(calculator.subtract(10, 5));  // Output: 5
console.log(calculator.multiply(10, 5));  // Output: 50
console.log(calculator.divide(10, 5));    // Output: 2


// =====================================================
// 3. USING 'THIS' KEYWORD IN METHODS
// =====================================================

// The 'this' keyword refers to the object itself
// This allows methods to access other properties of the same object

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    
    // Method that uses 'this' to access object properties
    displayInfo: function() {
        console.log("Car: " + this.brand + " " + this.model + " (" + this.year + ")");
    },
    
    getAge: function() {
        return 2024 - this.year;
    }
};

car.displayInfo();  // Output: Car: Toyota Camry (2020)
console.log("Age: " + car.getAge() + " years");  // Output: Age: 4 years


// =====================================================
// 4. STUDENT OBJECT WITH METHODS
// =====================================================

const student = {
    firstName: "Alice",
    lastName: "Smith",
    age: 20,
    gpa: 3.8,
    
    // Method to get full name
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },
    
    // Method to check if student is passing
    isPassing: function() {
        return this.gpa >= 3.0;
    },
    
    // Method to display student info
    displayInfo: function() {
        console.log("Name: " + this.getFullName());
        console.log("Age: " + this.age);
        console.log("GPA: " + this.gpa);
        console.log("Passing: " + this.isPassing());
    }
};

console.log(student.getFullName());  // Output: Alice Smith
console.log("Passing: " + student.isPassing());  // Output: Passing: true
student.displayInfo();
// Output:
// Name: Alice Smith
// Age: 20
// GPA: 3.8
// Passing: true


// =====================================================
// 5. BANK ACCOUNT OBJECT WITH METHODS
// =====================================================

const bankAccount = {
    accountHolder: "Bob Johnson",
    balance: 1000,
    
    // Method to deposit money
    deposit: function(amount) {
        this.balance = this.balance + amount;
        console.log(amount + " deposited. New balance: $" + this.balance);
    },
    
    // Method to withdraw money
    withdraw: function(amount) {
        if (amount <= this.balance) {
            this.balance = this.balance - amount;
            console.log(amount + " withdrawn. New balance: $" + this.balance);
        } else {
            console.log("Insufficient funds!");
        }
    },
    
    // Method to check balance
    checkBalance: function() {
        console.log("Account Balance: $" + this.balance);
    }
};

bankAccount.checkBalance();      // Output: Account Balance: $1000
bankAccount.deposit(500);        // Output: 500 deposited. New balance: $1500
bankAccount.withdraw(200);       // Output: 200 withdrawn. New balance: $1300
bankAccount.withdraw(2000);      // Output: Insufficient funds!


// =====================================================
// 6. BUILT-IN METHODS ON STRINGS
// =====================================================

// Strings have many built-in methods

const text = "Hello World";

console.log(text.length);           // Output: 11 (property, not method)
console.log(text.toUpperCase());    // Output: HELLO WORLD (method)
console.log(text.toLowerCase());    // Output: hello world (method)
console.log(text.charAt(0));        // Output: H (method)
console.log(text.includes("World")); // Output: true (method)
console.log(text.indexOf("o"));     // Output: 4 (method)


// =====================================================
// 7. BUILT-IN METHODS ON ARRAYS
// =====================================================

// Arrays have many built-in methods

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.length);        // Output: 5 (property)
console.log(numbers[0]);            // Output: 1 (accessing element)

// Array methods
console.log(numbers.includes(3));   // Output: true
console.log(numbers.indexOf(4));    // Output: 3
console.log(numbers.reverse());     // Output: [5, 4, 3, 2, 1] (reverses array)

// More array methods
const fruits = ["apple", "banana", "cherry"];
fruits.push("date");                // Adds to end
console.log(fruits);                // Output: ["apple", "banana", "cherry", "date"]

fruits.pop();                       // Removes from end
console.log(fruits);                // Output: ["apple", "banana", "cherry"]

fruits.shift();                     // Removes from beginning
console.log(fruits);                // Output: ["banana", "cherry"]

fruits.unshift("apple");            // Adds to beginning
console.log(fruits);                // Output: ["apple", "banana", "cherry"]


// =====================================================
// 8. BOOK OBJECT - MORE PRACTICAL EXAMPLE
// =====================================================

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    isRead: false,
    
    // Method to mark as read
    markAsRead: function() {
        this.isRead = true;
        console.log(this.title + " marked as read!");
    },
    
    // Method to get book info
    getInfo: function() {
        let status = this.isRead ? "read" : "not read";
        return "'" + this.title + "' by " + this.author + " (" + this.pages + " pages) - " + status;
    },
    
    // Method to estimate reading time
    estimateReadingTime: function(wordsPerPage) {
        let totalWords = this.pages * wordsPerPage;
        let hours = Math.ceil(totalWords / 250);  // Average 250 words per minute of reading
        return hours;
    }
};

console.log(book.getInfo());         // Output: 'The Great Gatsby' by F. Scott Fitzgerald (180 pages) - not read
book.markAsRead();                   // Output: The Great Gatsby marked as read!
console.log(book.getInfo());         // Output: 'The Great Gatsby' by F. Scott Fitzgerald (180 pages) - read
console.log("Reading time: ~" + book.estimateReadingTime(250) + " hours");


// =====================================================
// 9. MODERN SYNTAX - SHORTHAND METHODS
// =====================================================

// In modern JavaScript, you can write methods without the 'function' keyword

const dog = {
    name: "Rex",
    breed: "Labrador",
    
    // Modern method syntax (shorthand)
    bark() {
        console.log(this.name + " says: Woof!");
    },
    
    getInfo() {
        return this.name + " is a " + this.breed;
    }
};

dog.bark();              // Output: Rex says: Woof!
console.log(dog.getInfo()); // Output: Rex is a Labrador


// =====================================================
// 10. ARROW FUNCTIONS AS METHODS (CAREFUL WITH THIS)
// =====================================================

// Note: Arrow functions have different 'this' behavior!
// Avoid using arrow functions as methods if you need 'this'

const person2 = {
    name: "Charlie",
    
    // Regular function - 'this' works correctly
    sayHello: function() {
        console.log("Hello, I'm " + this.name);
    },
    
    // Arrow function - 'this' might NOT work as expected
    // Avoid this pattern!
    sayHi: () => {
        console.log("Hi, I'm " + this.name);  // this doesn't refer to person2
    }
};

person2.sayHello();  // Output: Hello, I'm Charlie
person2.sayHi();     // Output: Hi, I'm undefined (this doesn't work in arrow functions)


// =====================================================
// 11. METHODS THAT MODIFY OBJECTS
// =====================================================

const counter = {
    count: 0,
    
    increment: function() {
        this.count++;
    },
    
    decrement: function() {
        this.count--;
    },
    
    reset: function() {
        this.count = 0;
    },
    
    getValue: function() {
        return this.count;
    }
};

console.log(counter.getValue());  // Output: 0
counter.increment();
counter.increment();
console.log(counter.getValue());  // Output: 2
counter.decrement();
console.log(counter.getValue());  // Output: 1
counter.reset();
console.log(counter.getValue());  // Output: 0


// =====================================================
// 12. CREATING OBJECTS WITH SIMILAR METHODS
// =====================================================

// When you need multiple similar objects, you can create them separately

const user1 = {
    name: "John",
    email: "john@example.com",
    displayProfile: function() {
        console.log(this.name + " (" + this.email + ")");
    }
};

const user2 = {
    name: "Jane",
    email: "jane@example.com",
    displayProfile: function() {
        console.log(this.name + " (" + this.email + ")");
    }
};

user1.displayProfile();  // Output: John (john@example.com)
user2.displayProfile();  // Output: Jane (jane@example.com)


// =====================================================
// QUICK REFERENCE - METHOD SYNTAX
// =====================================================

/*
SYNTAX:

const objectName = {
    propertyName: value,
    
    // Method - old syntax
    methodName: function() {
        // method body
        // can use 'this' to access object properties
    },
    
    // Method - modern shorthand syntax
    anotherMethod() {
        // method body
    }
};

CALLING A METHOD:

objectName.methodName();           // Call the method
objectName.methodName(arguments);  // Call with arguments

ACCESSING PROPERTIES FROM WITHIN METHOD:

this.propertyName   // Refers to properties of the same object
*/


// =====================================================
// KEY DIFFERENCES: PROPERTIES vs METHODS
// =====================================================

/*
PROPERTIES:
- Store data/values
- Accessed like: object.property
- Examples: name, age, count

METHODS:
- Perform actions/functions
- Called like: object.method()
- Examples: greet(), calculate(), save()

Example:
const obj = {
    name: "John",           // Property (value)
    age: 30,                // Property (value)
    greet: function() {},   // Method (function)
    calculate: function() {} // Method (function)
};
*/


// =====================================================
// KEY POINTS TO REMEMBER
// =====================================================

/*
1. A method is a function that belongs to an object
2. Methods are called using dot notation: object.methodName()
3. Inside a method, 'this' refers to the object itself
4. Methods can access other properties of the object using 'this'
5. Methods can take parameters and return values
6. Modern shorthand syntax: methodName() { } instead of methodName: function() { }
7. Avoid arrow functions for methods that need 'this'
8. Methods allow objects to have behaviors, not just data
9. Arrays and strings have built-in methods
10. You can create custom methods for your own objects
11. Methods make code more organized and object-oriented
12. Objects are like nouns (things), methods are like verbs (actions)
*/

console.log("\n=== Methods Basics Complete ===\n");
