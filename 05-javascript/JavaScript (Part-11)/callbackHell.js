let one = document.querySelector("#one");
let two = document.querySelector("#two");

// simple setTimeouts to change the color and text of the first element after a delay
setTimeout(() => {
  one.style.color = "red";
  one.textContent = "Updated!";
}, 1000);

setTimeout(() => {
  one.style.color = "blue";
  one.textContent = "Updated again!";
}, 2000);

setTimeout(() => {
  one.style.color = "green";
  one.textContent = "Updated again and again!";
}, 3000);

// function to change color with a delay and a callback for the next color change
function changeColor(color, delay, nextColor) {
  setTimeout(() => {
    two.style.color = color;
    if (nextColor) nextColor();
  }, delay);
}

// Callback Hell - callbacks nested within callbacks, making the code hard to read and maintain
changeColor("red", 1000, () => {
  changeColor("blue", 1000, () => {
    changeColor("green", 1000, () => {
      changeColor("orange", 1000, () => {
        changeColor("purple", 1000, () => {});
      });
    });
  });
});
