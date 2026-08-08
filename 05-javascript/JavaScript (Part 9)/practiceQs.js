// Qs 1:
let p = document.createElement("p");
p.innerText = "hey i'm red!";

let body = document.querySelector("body");
body.appendChild(p);

p.classList.add("red");
