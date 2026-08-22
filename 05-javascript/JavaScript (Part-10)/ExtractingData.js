let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // let userName = document.querySelector("#userName");
  // let password = document.querySelector("#password");
  // let userName = this.elements.userName;
  // let password = this.elements.password;
  let { userName, password } = this.elements;

  console.log(`Your username is ${userName.value}`);
  console.log(`Your password is ${password.value}`);

  alert(`Hey ${userName.value}, your password is ${password.value}`);
});
