// Qs 1: Write an arrow function that returns the square of a number 'n'.

const square = (n) => {
  return n * n;
};

console.log(square(5));

// Qs 2: Write a function that prints "Hello World" 5 times at intervals of 2s each.
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`Print number ${count}`);

  if (count === 5) {
    clearInterval(intervalId);
  }
}, 2000);
