// Spread Operator with array literals

let arr = [1, 2, 3, 4, 5];
let newArr = [...arr, 6, 7, 8, 9, 10];

console.log(arr); // [1, 2, 3, 4, 5]
console.log(newArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let word = "Hello";
let letters = [...(word + "World!")];

console.log(word); // Hello
console.log(letters); // ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!']

let even = [2, 4, 6, 8];
let odd = [1, 3, 5, 7, 9];
let numbers = [...even, ...odd];

console.log(numbers); // [2, 4, 6, 8, 1, 3, 5, 7, 9]
