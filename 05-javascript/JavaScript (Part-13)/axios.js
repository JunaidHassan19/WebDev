let btn = document.querySelector("#btn");
let p = document.querySelector("#res");

btn.addEventListener("click", async () => {
  let fact = await getFacts();
  p.textContent = fact;
});

let url = "https://catfact.ninja/fact";

async function getFacts() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (error) {
    console.error("Error fetching facts:", error);
    return "Failed to fetch cat fact.";
  }
}

getFacts();
