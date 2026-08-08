// Qs 1:
let input = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = "Click Me";

let body = document.querySelector("body");

body.appendChild(input);
body.appendChild(btn);

// Qs 2;
btn.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

//Qs 3:
let button = document.getElementById("btn");
button.classList.add("btnStyle");
