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

// Qs 3
let div = document.createElement("div");

body.appendChild(div);

let h1 = document.createElement("h1");
h1.innerText = "I'm in a div";

div.appendChild(h1);

let p2 = document.createElement("p");
p2.innerText = "I'm also in a div";
div.appendChild(p2);
