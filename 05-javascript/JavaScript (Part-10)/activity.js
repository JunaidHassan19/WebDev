let h1 = document.querySelector("h1");
let button = document.querySelector("button");
let div = document.querySelector("div");

button.addEventListener("click", function () {
  div.style.backgroundColor = getRandomRGBColor();
  updateHeadingColor();
});

function getRandomRGBColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function updateHeadingColor() {
  const currentColor = div.style.backgroundColor;
  const rgbValues = currentColor.match(/\d+/g);
  const r = parseInt(rgbValues[0]);
  const g = parseInt(rgbValues[1]);
  const b = parseInt(rgbValues[2]);
  h1.style.color = currentColor;
  h1.textContent = `Current Background Color: rgb(${r}, ${g}, ${b})`;
}

let input = document.querySelector("#text");
let p = document.querySelector("#textP");

input.addEventListener("input", function () {
  p.innerText = input.value;
});
