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