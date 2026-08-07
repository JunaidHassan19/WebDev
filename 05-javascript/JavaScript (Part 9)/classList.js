/*

Manipulating Classes with classList: are a modern way to manipulate classes on an element. The classList property returns the class name(s) of an element as a DOMTokenList object, which has methods to add, remove, toggle, and check for classes.

obj.classList

classList.add(className1, className2, ...): Adds one or more class names to the element.

classList.remove(className1, className2, ...): Removes one or more class names from the element.

classList.toggle(className, force): Toggles a class name on the element. If the class is present, it removes it; if it's not present, it adds it. The optional force parameter can be used to force the addition or removal of the class.

classList.contains(className): Returns true if the element has the specified class name, otherwise false.


*/

let img = document.querySelector("img");
console.log(img.classList);

let heading = document.querySelector("h1");
console.log(heading.classList); // DOMTokenList(0) []

// Adding classes to the element using classList.add()
heading.classList.add("heading");
console.log(heading.classList); // DOMTokenList(1) ['heading', value: 'heading']
heading.classList.add("abc", "123");
console.log(heading.classList); // DOMTokenList(4) ['heading', 'abc', '123', value: 'heading abc 123']

let about = document.querySelector("h2");
about.classList.add("about");

// contains() method to check if an element has a specific class
console.log(heading.classList.contains("heading")); // true
console.log(heading.classList.contains("abc")); // true
console.log(heading.classList.contains("xyz")); // false

// removing classes from the element using classList.remove()
heading.classList.remove("heading");
about.classList.remove("about");

// toggle() method to add or remove a class based on its presence
heading.classList.toggle("heading");
about.classList.toggle("about");

let box = document.querySelector(".box");
box.classList.toggle("yellowBg");
