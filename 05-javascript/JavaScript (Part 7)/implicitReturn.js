const func = (a, b) => a + b; // Implicit return of the expression (a + b) * 2

console.log(func(2, 5));
console.log(func(3, 4));

const mul = (a, b) => a * b; // Implicit return of the expression (a * b)
console.log(mul(2, 5));

const cube = (a) => a * a * a; // Implicit return of the expression (a * a * a)
console.log(cube(3));

const square = (a) => a * a; // Implicit return of the expression (a * a)
console.log(square(4));

/*

Implicit return is a feature of arrow functions in JavaScript that allows you to return a value from a function without using the return keyword. When an arrow function has a single expression, the value of that expression is automatically returned.

*/