/*
Removing Elements from Page

removing elements from the page is a common task in web development. There are several methods to remove elements from the DOM (Document Object Model) using JavaScript. Here are some of the most commonly used methods:

1. Using the remove()
2. Using the removeChild()

*/

let mainImg = document.getElementById("mainImg");
mainImg.remove(); // This will remove the element from the DOM

let h1 = document.querySelector("h1");
h1.parentNode.removeChild(h1); // This will remove the h1 element from the DOM

let box = document.querySelector(".box");
box.remove(); // This will remove the box element from the DOM

//=========================================================
let a = document.createElement("a");
a.href = "https://developer.mozilla.org/en-US/docs/Web/API/Element/remove";
a.target = "_blank";
a.innerText = "Learn more about these methods";

let body = document.querySelector("body");
body.appendChild(a); // This will add the link to the body of the document
