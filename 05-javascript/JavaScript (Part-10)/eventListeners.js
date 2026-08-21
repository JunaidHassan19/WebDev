/* 
Event Listeners: addEventListener() method attaches an event handler to the specified element. You can add many event handlers to one element without overwriting existing event handlers.

addEventListener

element.addEventListener(event, callback);

*/

let btns = document.querySelectorAll("button");

for (btn of btns) {
  // btn.addEventListener("click", sayHlo);
  // btn.addEventListener("click", sayName);
  btn.addEventListener("dblclick", function () {
    console.log("Double Clicked!");
  });
}

function sayHlo() {
  console.log("Say Hello!");
}

function sayName() {
  console.log("Say my Name!");
}
