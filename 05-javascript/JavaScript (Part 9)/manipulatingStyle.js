let img = document.querySelector("img");

console.log(img);
console.log(img.src);
console.log(img.style);

let head = document.querySelector("h1");
console.dir(head);
console.log(head.innerText);
console.log(head.style);
head.style.color = "purple";
head.style.backgroundColor = "lightGreen";

let links = document.querySelectorAll("li a");
// for (let i = 0; i < links.length; i++) {
//   links[i].style.color = "red";
// }

for (link of links) {
  link.style.color = "red";
}

let oldImg = document.querySelectorAll(".images img");
for (imgs of oldImg) {
  imgs.src = "../assets/spiderman_img.png";
}
