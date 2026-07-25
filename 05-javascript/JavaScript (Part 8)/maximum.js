let arr = [2, 5, 6, 2, 3, 9, 7, 6];

// Using a for loop to find the maximum value in the array
let max = 0;
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log(max);

// Using the reduce method to find the maximum value in the array
let ans = arr.reduce((max, el) => {
  if (max < el) {
    return el;
  } else {
    return max;
  }
});
console.log(ans);
