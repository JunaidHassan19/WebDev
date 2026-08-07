/*
Adding Elements: We can add elements to the DOM using JavaScript. There are several methods to do this, including:
1. createElement(): This method creates a new element node. For example, document.createElement('div') creates a new <div> element.
2. appendChild(): This method adds a new child node to an existing parent node. For example, parentElement.appendChild(newElement) adds newElement as a child of parentElement.
3. insertBefore(): This method inserts a new node before an existing node. For example, parentElement.insertBefore(newElement, referenceNode) inserts newElement before referenceNode within parentElement.
4. innerHTML: This property allows you to set or get the HTML content of an element. For example, element.innerHTML = '<p>New Content</p>' replaces the content of element with the specified HTML.
5. textContent: This property allows you to set or get the text content of an element. For example, element.textContent = 'New Text' replaces the text content of element with the specified text.
*/

let newH1 = document.createElement("h1"); // Creates a new <h1> element
newH1.textContent = "Hello World"; // Sets the text content of the new <h1> element

let body = document.querySelector("body");
body.appendChild(newH1); // Appends the new <h1> element to the body of the document
