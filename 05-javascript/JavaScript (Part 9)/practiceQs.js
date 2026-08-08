// Qs 1:
let p = document.createElement("p");
p.innerText = "hey i'm red!";

let body = document.querySelector("body");
body.appendChild(p);

p.classList.add("red");

// Qs2 :
let h3 = document.createElement("h3");
h3.innerText = "hey i'm blue h3!";

body.appendChild(h3);

h3.classList.add("blue");
