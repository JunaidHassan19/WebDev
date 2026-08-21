let p = document.querySelector("p");
let div = document.querySelector("div");
let currText = p.innerText;

p.addEventListener("click", clickPara);
p.addEventListener("mouseover", function () {
  p.innerText = currText + " - mouse is over";
  p.style.backgroundColor = "lightblue";
});

function clickPara() {
  p.innerText = "para was clicked";
  p.style.backgroundColor = "red";
  p.style.color = "white";
  console.log("papa was clicked!");
}

div.addEventListener("mouseover", clickDiv);
div.addEventListener("mouseout", function () {
  div.style.backgroundColor = "lightgray";
});

function clickDiv() {
  console.log("Div was hovered over!");
  div.style.backgroundColor = "lightblue";
}
