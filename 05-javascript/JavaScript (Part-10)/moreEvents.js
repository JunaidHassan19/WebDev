/*
More Events in JavaScript:

change event: This event is triggered when the value of an input element changes. It is commonly used with text inputs, checkboxes, and select dropdowns.

input event: This event is triggered whenever the user types or modifies the value of an input element. It is useful for real-time validation or updating other elements based on user input.

focus event: This event is triggered when an element gains focus, such as when a user clicks on an input field or navigates to it using the keyboard.

blur event: This event is triggered when an element loses focus, such as when a user clicks outside of an input field or navigates away from it using the keyboard.

*/

let form = document.querySelector("form");

form.addEventListener("change", function (event) {
  event.preventDefault();
});

let userName = document.querySelector("#userName");

userName.addEventListener("change", function (event) {
  event.preventDefault();

  console.log(`The value of the change event is: ${this.value}`);
});

userName.addEventListener("input", function (event) {
  event.preventDefault();
  console.log(`The value of the input event is: ${this.value}`);
});

userName.addEventListener("focus", function (event) {
  event.preventDefault();
  console.log(`The input field is focused.`);
});

userName.addEventListener("blur", function (event) {
  event.preventDefault();
  console.log(`The input field has lost focus.`);
});
