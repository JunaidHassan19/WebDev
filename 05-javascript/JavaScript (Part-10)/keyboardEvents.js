/*
Keyboard Events in JavaScript:
   events like keydown, keyup, and keypress are used to handle keyboard input from the user. These events can be attached to elements to detect when a user presses or releases a key on the keyboard.

*/
let inputElement = document.querySelector("input");

inputElement.addEventListener("keydown", function (event) {
  console.log(`Key down: ${event.key} and the key code is: ${event.code}`);
});

inputElement.addEventListener("keyup", function (event) {
  console.log(`Key up: ${event.key} and the key code is: ${event.code}`);
});

inputElement.addEventListener("keypress", function (event) {
  console.log(`Key pressed: ${event.key} and the key code is: ${event.code}`);
});
