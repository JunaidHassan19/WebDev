// Qs 1: Check if all numbers in our array are multiples of 10 or not

// let arr = [10, 20, 30, 40];
let arr = [10, 20, 30, 40, 15, 25, 35];

let mul = arr.every((num) => {
  if (num % 10 == 0) {
    return true;
  } else {
    return false;
  }
});

console.log(mul);
