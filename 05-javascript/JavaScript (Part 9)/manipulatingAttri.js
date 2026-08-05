/*
Manipulating Attributes in JavaScript
In JavaScript, you can manipulate the attributes of HTML elements using various methods and properties. Here are some common ways to work with attributes:

1. Getting and Setting Attributes:
You can use the getAttribute() and setAttribute() methods to retrieve and modify the attributes of an element.

obj.getAttribute(attributeName): Retrieves the value of the specified attribute.
obj.setAttribute(attributeName, value): Sets the value of the specified attribute.

*/

let img = document.querySelector("img");
console.log(img);

console.log(img.getAttribute("id"));
img.setAttribute("id", "newId");
img.setAttribute("src", "../assets/creation_3.jpeg");

console.log(img.getAttribute("id"));

let imgClass = img.getAttribute("class");
console.log(imgClass);

img.setAttribute("class", "newClass");
console.log(img.getAttribute("class"));
