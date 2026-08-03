/*
Selecting elements by ID in JavaScript is a common task when you want to manipulate or interact with specific elements on a web page. The most common method to select an element by its ID is to use the `document.getElementById('idname')` function.

returns the element that has the ID attribute with the specified value. If no elements with the specified ID exists, it returns null.

Here's an example of how to use `document.getElementById('idname')`:
*/

// This will log the element with the ID "mainImg" to the console
console.log(document.getElementById("mainImg"));

// This will change the src attribute of the image with the ID "mainImg" to a new image file
document.getElementById("mainImg").src = "../assets/creation_1.png";

// This will log the element with the ID "description" to the console
console.log(document.getElementById("description"));

// This will change the inner text of the element with the ID "description" to a new description
document.getElementById("description").innerText =
  "Spider-Man is a fictional superhero created by writer Stan Lee and writer-artist Steve Ditko. He first appeared in Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books. He is one of the most popular and commercially successful superheroes, and has been adapted into various media, including television shows, films, and video games.";
