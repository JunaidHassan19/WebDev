/*

Allows us to use any CSS selector to select elements from the DOM. It returns the first element that matches the selector.


*/

// querySelector() method is used to select the first element that matches a specified CSS selector(s) in the document. It allows you to use any valid CSS selector to target elements, making it a versatile and powerful way to access elements in the DOM.
document.querySelector("#mainImg").style.border = "5px solid red";
document.querySelector("p").style.backgroundColor = "lightgray";
document.querySelector(".box").style.backgroundColor = "lightblue";

// querySelectorAll() method is used to select all elements that match a specified CSS selector(s) in the document. It returns a NodeList containing all matching elements, allowing you to work with multiple elements at once.
const oldImages = document.querySelectorAll(".oldImg");
oldImages.forEach((img) => {
  img.style.border = "5px solid green";
});

document.querySelectorAll("p").forEach((para) => {
  para.style.color = "blue";
});
