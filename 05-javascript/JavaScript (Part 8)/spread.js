/*
Spread Operator in JavaScript:
    The spread operator (...) allows an iterable such as an array or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.


    syntax:
        ...iterable

        functions func(...args) {
            // code
        }


*/

console.log(..."Hello World!"); // H e l l o   W o r l d !

let num = [1, 2, 3, 4, 5];
console.log(...num); // 1 2 3 4 5
console.log(Math.max(...num)); // 5
console.log(Math.min(...num)); // 1
