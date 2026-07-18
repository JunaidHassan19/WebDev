// Qs 1.Write a JS program to delete all occurrences of element 'num' in a given array. Example: if arr=[1,2,3,4,5,6,2,3] & num=2, Result should be arr=[1,3,4,5,6,3]

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for(let i = 1; i < arr.length; i ++) {
  if(arr[i] == num) {
    arr.splice(i, 1);
  }
}
console.log(arr);

// Qs 2.Write a JS program to find the number of digits in a number. Example: if number=287152, count = 6

let numbre = 287152;
let count = 0;

let copy = numbre;
while(copy > 0) {
  count ++;
  copy = Math.floor(copy/10);
}
console.log(count);

// Qs 3. Write a JS program to find the sum of digits in a number. Example: if number = 287152,sum = 25

let numbr = 287152;
let sum = 0;

let copy2 = numbr;
while(copy2 > 0) {
  digit = copy2 % 10;
  sum += digit;
  copy2 = Math.floor(copy2/10);
}
console.log(sum);

// Qs 4. Print the factorial of a number n. [Factorial of a number is the product of all positive integers less than or equal to a given positive integer and denoted by that integer.] Example: 7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040, 5! (factorial of 5) = 1x2x3x4x5 = 120, 3! (factorial of 3) = 1x2x3 = 6, 0! is always 1

let n = prompt("Enter a Number you want to find factorial of:");
let factorial = 1;

for(let i = 1; i <= n; i ++) {
  factorial *= i;
}
console.log(`Factorial of ${n} is: ${factorial}`);
