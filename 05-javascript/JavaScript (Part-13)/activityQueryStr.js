let url3 = "https://api.genderize.io?name=";
let btn3 = document.getElementById("btn3");

btn3.addEventListener("click", async () => {
  let nameInput = document.getElementById("name-input").value;

  try {
    let response = await axios.get(url3 + nameInput);
    let h3 = document.getElementById("gender-results");
    h3.textContent = `Hey ${nameInput}, your predicted gender is: ${response.data.gender}`;
  } catch (error) {
    console.error("Error fetching gender prediction:", error);
  }
});
