let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function (e) {
  e.stopPropagation();
  let item = document.createElement("li");
  item.innerText = inp.value;

  let dltBtn = document.createElement("button");
  dltBtn.classList.add("delete");
  dltBtn.innerText = "X";

  item.appendChild(dltBtn);
  ul.appendChild(item);
  inp.value = "";
});

ul.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  }
});
