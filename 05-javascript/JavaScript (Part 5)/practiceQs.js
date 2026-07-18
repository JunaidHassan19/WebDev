// 1 and 100
let num = Math.random();
num = num * 100;
num = Math.floor(num);
num += 1;
console.log(num);
 
// Shorter version
console.log(Math.floor(Math.random() * 100) + 1);


// 1 and 5;

console.log(Math.floor(Math.random() * 5) + 1);