/*

Selecting elements by class name using JavaScript is a common task in web development. The `getElementsByClassName` method allows you to retrieve all elements that have a specific class name. Here's an example of how to use it:

returns a live HTMLCollection of elements with the specified class name. You can then iterate over this collection to manipulate the elements as needed.

*/

let elements = document.getElementsByClassName("oldImg");

for (let i = 0; i < elements.length; i++) {
  elements[i].src = "../assets/spiderman_img.png";
  console.log(`Element ${i} has been updated to: ${elements[i].src}`);
}

console.log(document.getElementsByClassName("oldImg"));
console.log(document.getElementsByClassName("oldImg")[0]);
console.log(document.getElementsByClassName("oldImg")[1]);
