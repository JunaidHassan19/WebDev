let button = document.querySelector("button");
let btns = document.querySelectorAll("button");

button.onclick = function () {
  console.log("button was clicked");
};

function sayHello() {
  console.log("Hello");
}

button.onclick = sayHello;

for (btn of btns) {
  btn.onclick = hlo;
  btn.onmouseenter = hlo;
}

function hlo() {
  console.log("Hello!");
}
