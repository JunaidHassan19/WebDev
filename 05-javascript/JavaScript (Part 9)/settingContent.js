let para = document.querySelector("p");

// innerText property is used to get or set the text content of an element, excluding any HTML tags. It returns the visible text content of the element and its descendants, as rendered on the page.
console.log(para.innerText);

// textContent property is used to get or set the text content of an element, including all its descendants, regardless of whether they are visible or not. It returns the raw text content of the element and its descendants, including any hidden elements.
console.log(para.textContent);

// innerHTML property is used to get or set the HTML content of an element. It returns the HTML markup contained within the element, including any child elements and their attributes.
console.log(para.innerHTML);

para.innerText = "This is the new text content set using innerText.";

para.textContent = "This is the new text content set using textContent.";

para.innerHTML =
  "<strong>This is the new HTML content set using innerHTML.</strong>";

let heading = document.querySelector("h1");
heading.innerText = "Spider-Man: The Amazing Web-Slinger";
heading.style.color = "green";
heading.style.backgroundColor = "lightgray";

let oldImages = document.querySelectorAll(".oldImg");
oldImages.forEach((img, index) => {
  img.src = `../assets/spiderman_img.png`;
});
