let url2 = "https://dog.ceo/api/breeds/image/random";
let btn2 = document.querySelector("#btn2");
let img = document.querySelector("#dog-pic");

btn2.addEventListener("click", async () => {
  let dogpic = await getDogPic();
  img.src = dogpic;
});

async function getDogPic() {
  try {
    let res = await axios.get(url2);
    return res.data.message;
  } catch (error) {
    console.error("Error fetching dog picture:", error);
    return "Failed to fetch dog picture.";
  }
}
