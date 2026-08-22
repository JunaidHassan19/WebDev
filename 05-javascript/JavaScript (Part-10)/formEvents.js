/*
form events: are used to handle user interactions with forms, such as submitting a form or changing the value of an input field. These events allow developers to validate user input, provide feedback, and perform actions based on user interactions with form elements.

learn more: https://developer.mozilla.org/en-US/docs/Web/Events#form_events

*/
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("form submitted");
});
