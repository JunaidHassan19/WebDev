// Qs 1: Check if all numbers in our array are multiples of 10 or not

// let arr = [10, 20, 30, 40];
let arr = [10, 20, 30, 40, 15, 25, 35];

let mul = arr.every((num) => {
  return num % 10 === 0;
});

console.log(mul);

// Qs 2: Create a function to find the min number in an array
function getMin(nums) {
  let min = nums.reduce((min, el) => {
    if (min < el) {
      return min;
    } else {
      return el;
    }
  });

  return min;
}
let nums = [5, 6, 2, 8, 9, 1, 6, 7];
console.log(getMin(nums));
