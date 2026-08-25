/*
  Handling Rejections in async/await
  In this example, we are using async/await to handle the promise returned by the changeColor function.
*/
let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10);
      if (num > 5) {
        reject("Error: color change failed");
      }
      h1.style.color = color;
      console.log("color changed to " + color);
      resolve("color changed to " + color);
    }, delay);
  });
}

async function colorChange() {
  try {
    await changeColor("red", 1000);
    await changeColor("green", 1000);
    await changeColor("blue", 1000);
  } catch (error) {
    console.log(error);
  }

  let a = 5;
  console.log(`The number is ${a}`);
}

colorChange();
