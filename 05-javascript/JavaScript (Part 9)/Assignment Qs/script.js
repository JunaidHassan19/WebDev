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

// Qs4:

let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
body.appendChild(h1);
h1.classList.add("h1Style");

// Qs 5:
let p = document.createElement("p");
p.innerText =
  "Lorem ipsum dolor sit amet consectetur <b>adipisicing</b> elit. Quisquam, quod.";
body.appendChild(p);
p.classList.add("pStyle");
