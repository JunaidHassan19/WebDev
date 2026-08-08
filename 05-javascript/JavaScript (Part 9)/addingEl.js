/*
Adding Elements: We can add elements to the DOM using JavaScript. There are several methods to do this, including:
1. createElement(): This method creates a new element node. For example, document.createElement('div') creates a new <div> element.
2. appendChild(): This method adds a new child node to an existing parent node. For example, parentElement.appendChild(newElement) adds newElement as a child of parentElement.
3. insertBefore(): This method inserts a new node before an existing node. For example, parentElement.insertBefore(newElement, referenceNode) inserts newElement before referenceNode within parentElement.
4. innerHTML: This property allows you to set or get the HTML content of an element. For example, element.innerHTML = '<p>New Content</p>' replaces the content of element with the specified HTML.
5. textContent: This property allows you to set or get the text content of an element. For example, element.textContent = 'New Text' replaces the text content of element with the specified text.
*/

let newPara = document.createElement("p"); // Creates a new <p> element
newPara.textContent = "Hello World!."; // Sets the text content of the new <p> element

let body = document.querySelector("body");
body.appendChild(newPara); // Appends the new <p> element to the body of the document

let box = document.querySelector(".box");
box.appendChild(newPara); // Appends the new <p> element to the element with class "box"

let btn = document.createElement("button"); // Creates a new <button> element
btn.innerText = "Click me!"; // Sets the text of the button

box.appendChild(btn); // Appends the new <button> element to the element with class "box"

// append();
newPara.append(" This is new text using append after button"); // Appends text to the new <p> element after the button
newPara.append(btn); // Appends the button to the new <p> element
newPara.append(" This is new text using append after button"); // Appends text to the new <p> element after the button

// prepend();
box.prepend("This is new text using prepend before button"); // Prepends text to the element with class "box" before the button
// box.prepend(newPara);

// insertAdjacentElement();
let p = document.querySelector("p");
let btn2 = document.createElement("button");
btn2.innerText = "Click me!"; // Sets the text of the button

p.insertAdjacentElement("beforebegin", btn2); // Inserts the new button before the <h2> element)
p.insertAdjacentElement("afterbegin", btn2); // Inserts the new button after the <h2> element)
p.insertAdjacentElement("beforeend", btn2); // Inserts the new button before the <p> element)
p.insertAdjacentElement("afterend", btn2); // Inserts the new button after the <p> element)
