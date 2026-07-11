/* 
Arguments are values that we pass to a function when we call it.

*/

let str = "hello";

console.log(str.indexOf("e")); // 1
console.log(str.indexOf("l")); // 2 print the index of first occurrence of "l"
console.log(str.indexOf("l", 3)); // 3  print the index of first occurrence of "l" after index 3
console.log(str.indexOf("o")); // 4

let str2 = "hello world!, welcome to the world of JavaScript.";
console.log(str2.indexOf("world")); // 6
console.log(str2.indexOf("world", 7)); // 24
console.log(str2.indexOf("JavaScript")); // 28
console.log(str2.indexOf("Python")); // -1 (not found)