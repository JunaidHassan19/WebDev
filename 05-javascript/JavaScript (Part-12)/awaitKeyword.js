/*
Await Keyword in JavaScript:
   pauses the execution of an async function until a Promise is resolved or rejected, allowing for cleaner and more readable asynchronous code. It can only be used inside async functions. When used, it waits for the Promise to settle and returns its result, making it easier to work with asynchronous operations without chaining .then() methods.
*/

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10);
      console.log("Generated number:", num);
      resolve();
    }, 1000);
  });
}

async function demo() {
  await getNum();
  await getNum();
  await getNum();
  await getNum();
  await getNum();
  await getNum();
}

demo();

//==========================================================

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed to " + color);
    }, delay);
  });
}

async function colorChange() {
  await changeColor("red", 1000);
  await changeColor("green", 1000);
  await changeColor("blue", 1000);
  await changeColor("yellow", 1000);
  await changeColor("orange", 1000);
  await changeColor("purple", 1000);
  await changeColor("pink", 1000);
}

colorChange();
