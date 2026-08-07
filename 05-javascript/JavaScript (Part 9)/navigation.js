/*

Navigation in JavaScript: Is the process of moving between different pages or sections of a website using JavaScript. It allows developers to create dynamic and interactive user experiences by enabling users to navigate through content without having to reload the entire page.

parentElement: Refers to the immediate ancestor of a specified element in the DOM tree. It allows developers to access and manipulate the parent element of a given element.

children: Refers to the child elements of a specified element in the DOM tree. It allows developers to access and manipulate the child elements of a given element.

previousElementSibling: Refers to the immediate sibling element that comes before a specified element in the DOM tree. It allows developers to access and manipulate the previous sibling element of a given element.

nextElementSibling: Refers to the immediate sibling element that comes after a specified element in the DOM tree. It allows developers to access and manipulate the next sibling element of a given element.

*/

let h4 = document.querySelector("h4");
console.log(h4.parentElement); // <div class="box">...</div>
console.log(h4.parentElement.parentElement); // <body>...</body>
console.log(h4.parentElement.parentElement.parentElement); // <html>...</html>
console.log(h4.childElementCount); // 0
console.log(h4.children); // HTMLCollection []
console.log(h4.previousElementSibling); // <p>...</p>
console.log(h4.nextElementSibling); // <p>...</p>
