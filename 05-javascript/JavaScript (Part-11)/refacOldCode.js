// Refactored code using Promises to change the color of an h1 element sequentially with delays
let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("Color changed to " + color);
    }, delay);
  });
}

// Using Promise chaining to change colors sequentially
changeColor("red", 1000)
  .then(() => {
    console.log("Color changed to red");
    return changeColor("blue", 1000);
  })
  .then(() => {
    console.log("Color changed to blue");
    return changeColor("green", 1000);
  })
  .then(() => {
    console.log("Color changed to green");
    return changeColor("orange", 1000);
  })
  .then(() => {
    console.log("Color changed to orange");
    return changeColor("purple", 1000);
  })
  .then(() => {
    console.log("Color changed to purple");
  });
