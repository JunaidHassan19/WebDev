/*
this in event listener:
   when 'this' is used inside an event listener, it refers to the element that the event listener is attached to. This allows you to access and manipulate the specific element that triggered the event.
*/

// let button = document.querySelectorAll("button");

// for (btn of button) {
//   btn.addEventListener("click", function () {
//     console.log(this);
//   });
// }

let btn = document.querySelectorAll("button");
let para = document.querySelector("p");
let div = document.querySelector("div");

function changeColor() {
  console.log(this.innerText, `clicked`);
  this.style.backgroundColor = "red";
  this.style.color = "white";
}

for (let button of btn) {
  button.addEventListener("click", changeColor);
}

para.addEventListener("click", changeColor);
div.addEventListener("click", changeColor);
